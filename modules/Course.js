// @ts-check
/**
 * Class to representate a Course
 */
class Course {
   /**
   * Course constructor
   *
   * @param {Object} obj - An object.
   * @param {String} obj.name - Name of course
   * @param {String} obj.teacher - Name of teacher's Course
   * @param {Number} obj.modules - Number of modules of the course
   * @param {Boolean} [obj.isFree] - Number of modules of the course
   * @param {Number} obj.timeToFinish - Time to finish the course in hours
   * @param {Number} [obj.rate] - Rate of the course
   */
  constructor({
    name,
    teacher,
    modules,
    isFree = false,
    timeToFinish,
    rate = 5,
  })
  {
    this.name = name,
    this.teacher = teacher,
    this.modules = modules,
    this.isFree = isFree,
    this.timeToFinish = timeToFinish,
    this.rate = rate
  }
}

const POOCourse = new Course({
  name: 'POO with JS',
  teacher: 'JuanDc',
  modules: 4,
  isFree: false,
  timeToFinish: 3,
  rate: 5
});


