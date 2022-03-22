
export class Comment {
  constructor({
    id,
    content,
    studentName,
    studentRole = 'Student',
    date,
    parentId,
    children = []
  }) {
    this.id = id;
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.date = date;
    this.parentId = parentId;
    this.children = children;
    this.likes = 0;
  }

  publicar(){
    console.log(this.studentName + ' (' + this.studentRole + ')');
    console.log(this.likes + ' likes');
    console.log(this.content);
  }

  addChild(comment) {
    this.children.push(comment);
  }

  getChildren() {
    return this.children;
  }
}
