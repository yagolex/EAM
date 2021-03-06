export interface Course {
  title: string;
  description: string;
  creationDate: Date;
  durationMinutes: number;
  id: number;
  topRated: boolean;
  authors: string;
}

export interface CourseFromApi {
  id;
  name;
  description;
  isTopRated;
  date;
  authors;
  length;
}
