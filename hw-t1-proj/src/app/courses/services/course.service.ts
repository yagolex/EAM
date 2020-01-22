import { Injectable } from '@angular/core';
import { Course, CourseFromApi } from '../models/course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASE_COURSE_URL = 'http://localhost:3004/courses';

@Injectable()
export class CourseService {
  constructor(private httpClient: HttpClient) {}

  public getCourseList(start: number, count: number, searchCriteria: string): Observable<Course[]> {
    let url = this.buildGetUrl(start, count, searchCriteria);
    return this.getCourseListFromApi(url).pipe(
      map((items: CourseFromApi[]) => {
        return items.map((item: CourseFromApi) => this.mapApi2AppItem(item));
      })
    );
  }

  public addCourse(newAppCourseItem: Course): Observable<Course> {
    let newApiCourseItem = this.mapApp2ApiItem(newAppCourseItem);
    let url = BASE_COURSE_URL;
    return this.addNewCourseWithApi(url, newApiCourseItem).pipe(
      map((item: CourseFromApi) => {
        return this.mapApi2AppItem(item);
      })
    );
  }

  public getCourseById(courseId: number): Observable<Course> {
    let url = `${BASE_COURSE_URL}/${courseId}`;
    return this.getCourseFromApi(url).pipe(
      map((item: CourseFromApi) => {
        return this.mapApi2AppItem(item);
      })
    );
  }

  public updateCourse(updatedCourseItem: Course): boolean {
    return true;
  }

  public deleteCourse(courseId: number): Observable<void> {
    let url = `${BASE_COURSE_URL}/${courseId}`;
    return this.deleteCourseFromApi(url);
  }

  private addNewCourseWithApi(url: string, newCourse: CourseFromApi): Observable<CourseFromApi> {
    return this.httpClient.post<CourseFromApi>(url, newCourse);
  }

  private deleteCourseFromApi(url: string): Observable<void> {
    return this.httpClient.delete<void>(url);
  }

  private getCourseListFromApi(url: string): Observable<CourseFromApi[]> {
    return this.httpClient.get<CourseFromApi[]>(url);
  }

  private getCourseFromApi(url: string): Observable<CourseFromApi> {
    return this.httpClient.get<CourseFromApi>(url);
  }

  private buildGetUrl(start: number, count: number, searchCriteria: string): string {
    let url = `${BASE_COURSE_URL}?start=${start}&count=${count}`;
    if (searchCriteria != null) {
      url = url + `&textFragment=${searchCriteria}`;
    }
    return url;
  }

  private mapApi2AppItem(item: CourseFromApi): Course {
    return {
      id: item.id,
      title: item.name,
      description: item.description,
      creationDate: item.date,
      durationMinutes: item.length,
      topRated: item.isTopRated,
      authors: item.authors
    };
  }

  private mapApp2ApiItem(item: Course): CourseFromApi {
    return {
      id: item.id,
      name: item.title,
      description: item.description,
      date: item.creationDate,
      length: item.durationMinutes,
      isTopRated: item.topRated,
      authors: item.authors
    };
  }

  public static getNewCourse(
    title: string = '',
    description: string = '',
    startDate: Date = new Date(),
    durationMinutes: number = 0,
    id: number = 0,
    topRated: boolean = false,
    authors: string = ''
  ): Course {
    return { title, description, creationDate: startDate, durationMinutes, id, topRated, authors };
  }
}
