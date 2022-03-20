import { FreeStudent } from "./modules/FreeStudent.js"
import { ExpertStudent } from "./modules/ExpertStudent.js"
import { School } from "./modules/School.js"
import { Course } from "./modules/Course.js"

const htmlCourse = new Course({
    name: 'HTML Course',
    teacher: 'Diego de Granda',
    modules: 2,
    isFree : false,
    courseTime : 3,
});

const cssCourse = new Course({
  name: 'CSS Course',
  teacher: 'Diego de Granda',
  modules: 3,
  isFree : true,
  courseTime : 3,
});

const POOCourse = new Course({
  name: 'POO with JS',
  teacher: 'JuanDc',
  modules: 4,
  isFree: false,
  courseTime: 3,
  rate: 5
});

const webSchool = new School({
  name: 'Web School',
  courses: [htmlCourse, cssCourse],
  timeToPass: 3
});

webSchool.addCourse(POOCourse);


// craete a students instances
const juan = new FreeStudent({
  name: 'Juan',
  username: 'astra.exe',
  approvedCourses: [],
  learningPaths: [],
  coursesInProgress: [cssCourse],
  twitter: '@astra'
});

console.log(juan);
// juan.takeCourse(htmlCourse);


const sebas = new ExpertStudent({
  name: 'Sebas',
  username: 'sebita',
  approvedCourses: [],
  learningPaths: [webSchool],
  coursesInProgress: [],
  twitter: '@sopi'
});

console.log(sebas);

// prube when the user get pass siome course
sebas.coursesInProgress[1].finishCourse(); //finish the css course, chance it state isDone
sebas.approveCourse('CSS Course'); //pass to pass courses list
console.log(sebas); //check if the course is approved
// console.log(sebas.getPaths());
