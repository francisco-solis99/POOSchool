import {Student} from "./Student.js";
import { Comment } from "./Comment.js";

export class Teacher extends Student {
  constructor({coursesTaught = [], ...props}){
    super(props);
    this.coursesTaught = coursesTaught;
  }

  addCourseTaught(course){
    this.coursesTaught.push(course);
  }

  deleteCourseTaught(course){
    const courseIndex = this.coursesTaught.findIndex(element => element.name === course.name);
    if(courseIndex === -1) return console.info('🤔You have not taught this course');

    this.coursesTaught.splice(courseIndex, 1);
  }

  getCoursesTaught(){
    return this.coursesTaught;
  }

  postComment(commentContent){
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: 'Teacher',
      date: new Date().toLocaleString(),
    });
    comment.publicar();
  }
}
