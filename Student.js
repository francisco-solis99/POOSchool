class Student {
  constructor({
    name,
    points = 0,
    username = undefined,
    twitter = undefined,
    approvedCourses = [],
    learningPaths = []

  })
  {
    this.name = name;
    this.points = points;
    this.username = username;
    this.twitter = twitter;
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}


const juan = new Student({
  name: 'Juan',
  username: 'astra.exe',
  approvedCoursed: [],
  learningPaths: [],
  twitter: '@astra'
});

console.table(juan);
