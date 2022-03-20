import {Student} from "./Student.js";

// @ts-check
/** Class representing a free student*/
export class FreeStudent extends Student {
  constructor(properties){
    super(properties);
  }

  takeCourse(course){
    if(course.isFree) {
      this.coursesInProgress.push(course);
      return;
    }
    console.log('Sorry 😢 To take this course begin your path with the Expert Plan');
  }

  addPath(){
    console.log('Sorry 😢 To add paths begin your path with the Expert Plan');;
  }
}



