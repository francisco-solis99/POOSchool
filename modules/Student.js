// @ts-check
/** Class representing a student*/
class Student {
  /**
   * Student constructor
   *
   * @param {Object} obj - An object.
   * @param {String} obj.name - Name of student
   * @param {String} obj.username - User name of the student
   * @param {String} obj.twitter - Students' twitter account
   * @param {Array<String>} obj.approvedCourses - Students' twitter account
   * @param {Array<String>} obj.learningPaths - Students' twitter account
   */
  constructor({
    name,
    username = undefined,
    twitter = undefined,
    approvedCourses = [],
    learningPaths = []

  })
  {
    this.name = name;
    this.username = username;
    this.twitter = twitter;
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}


const juan = new Student({
  name: 'Juan',
  username: 'astra.exe',
  approvedCourses: [],
  learningPaths: [],
  twitter: '@astra'
});

console.table(juan);
