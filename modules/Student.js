import { School } from "./School.js";
// @ts-check
/** Class representing a student*/
export class Student {
  /**
   * Student constructor
   *
   * @param {Object} obj - An object.
   * @param {String} obj.name - Name of student
   * @param {String} obj.username - User name of the student
   * @param {String} obj.twitter - Students' twitter account
   * @param {Array<String>} obj.approvedCourses - Approved courses by student
   * @param {Array<String>} obj.coursesInProgress - Approved courses by student
   * @param {Array<School>} obj.learningPaths - Student learning paths
   */
  constructor({
    name,
    username = undefined,
    twitter = undefined,
    approvedCourses = [],
    coursesInProgress = [],
    learningPaths = []
  })
  {
    this.name = name;
    this.username = username;
    this.twitter = twitter;
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
    this.coursesInProgress = coursesInProgress;
    if(learningPaths.length){
      learningPaths.forEach(path => this.coursesInProgress.push(...path.courses))
    }
  }

  getPaths(){
    return this.learningPaths;
  }

  addPath(school){
    this.learningPaths.push(school);
    school.courses.forEach(element => this.takeCourse(element));
  }

  takeCourse(course){
    if(this.coursesInProgress.find(element => element.name === this.course.name)){
      console.log('🤔You already taken this course');
      return;
    }
    this.coursesInProgress.push(course);
  }
}



// craete a instance
const juan = new Student({
  name: 'Juan',
  username: 'astra.exe',
  approvedCourses: [],
  learningPaths: [],
  coursesInProgress: [],
  twitter: '@astra'
});

console.table(juan);
