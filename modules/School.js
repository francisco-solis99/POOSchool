import {Course} from './Course.js'
// @ts-check
/** Class representing a learning path*/
export class School {
  /**
   * School constructor
   *
   * @param {Object} obj - An object.
   * @param {String} obj.name - Name of school
   * @param {Array<Course>} obj.courses - List of courses of the school
   * @param {Number} [obj.timeToPass] - Time to pass the school in days
   */
  constructor({
    name,
    courses = [],
    timeToPass,
  }){
    this.name = name;
    this.courses = courses;
    this.numCourses = courses.length;
    this.timeToPass = timeToPass;
  }

  get coursesList(){
    return this.courses;
  }

  set coursesList(courses){
    this.courses = courses;
  }

  addCourse(course) {
    this.courses.push(course);
  }

  deleteCourse(course) {
    const index = this.getIndexCourse(course);
    this.courses.splice(index, 1);
  }

  getIndexCourse(course) {
    const indexCourse = this.courses.findIndex(element => element === course);
    return indexCourse;
  }

  modifyCourse(course) {
    const index = this.getIndexCourse(course);
    this.courses.splice(index, 1, course);
  }

}
