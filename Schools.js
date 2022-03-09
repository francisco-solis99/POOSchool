// @ts-check
/** Class representing a learning path*/
class School {
  /**
   * School constructor
   *
   * @param {Object} obj - An object.
   * @param {String} obj.name - Name of school
   * @param {Array<String>} obj.courses - List of courses of the school
   * @param {Number} obj.timeToPass - Time to pass the school in days
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
}

const webSchool = new School({
  name: 'Web School',
  courses: ['Curso de HTML', 'Curso de CSS', 'Curso de JS', 'Curso de React'],
  timeToPass: 3
});

console.log(webSchool);
