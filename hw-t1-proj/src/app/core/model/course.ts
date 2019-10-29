import { DatePipe } from '@angular/common'
import { DurationTime } from './duration-time';
import { Injectable } from '@angular/core';
import { ICourseItem } from 'src/app/core/model/i-course-item';

@Injectable()
export class Course implements ICourseItem {
    title: string;
    description: string;
    creationDate: Date;
    duration: DurationTime;

    constructor(public datepipe: DatePipe) {
        this.creationDate=new Date();
    }

    static GetCourse(datepipe: DatePipe, title: string, description: string, startDate: Date, duration: DurationTime){
        
        let c1 = new Course (datepipe);
        c1.title = title;
        c1.description = description;
        c1.creationDate = startDate;
        c1.duration = duration;

        return c1;
    }

    getDate() : string {
        return this.datepipe.transform(this.creationDate, 'dd MMM, yyyy');
    }

    getDuration() : string {
        return this.duration.getDuration();
    }
}
