// @ts-check
/**
 * Class to representate a Course
 */
export class Course {
   /**
   * Course constructor
   *
   * @param {Object} obj - An object.
   * @param {String} obj.name - Name of course
   * @param {String} obj.teacher - Name of teacher's Course
   * @param {Number} obj.modules - Number of modules of the course
   * @param {Boolean} [obj.isFree] - Number of modules of the course
   * @param {Number} obj.courseTime - Time to finish the course in hours
   * @param {Boolean} [obj.isDone] - Time to finish the course in hours
   * @param {Number} [obj.rate] - Rate of the course
   */
  constructor({
    name,
    teacher,
    modules,
    isFree = false,
    courseTime,
    isDone = false,
    rate = 5,
  })
  {
    this.name = name;
    this.teacher = teacher;
    this.modules = modules;
    this.isFree = isFree;
    this.courseTime = courseTime;
    this.isDone = isDone;
    this.rate = rate;
  }

  changeFreeState(){
    this.isFree = !this.isFree;
  }

  finishCourse(){
    this.isDone = true;
  }

}

const POOCourse = new Course({
  name: 'POO with JS',
  teacher: 'JuanDc',
  modules: 4,
  isFree: false,
  courseTime: 3,
  rate: 5
});


