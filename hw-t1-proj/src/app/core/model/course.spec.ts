import { Course } from "./course";
import { DatePipe } from "@angular/common";

describe("#Course", () => {
  it("should create an instance", () => {
    let pipe = new DatePipe("en");
    expect(new Course(pipe)).toBeTruthy();
  });
});

describe("#Course", () => {
  it("should give good date", () => {
    let course = new Course(new DatePipe("en"));
    course.creationDate = new Date(2019, 10, 27);
    expect(course.getDate()).toEqual("27 Nov, 2019");
  });
});
