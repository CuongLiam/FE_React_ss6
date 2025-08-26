class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getID() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    setId(id) {
        this.id = id;
    }
}
let studentList = [];
class ClassRoom {
    students = [];
    displayInfo(stu) {
        console.log(`${stu.getID()}: ${stu.getName()}`);
    }
    showStudent() {
        this.students.forEach((stu) => {
            console.log(`${stu.getID()}: ${stu.getName()} \n`);
        });
    }
    addStudent(stu) {
        this.students.push(stu);
    }
    filterStudent(id) {
        // let foundStu : Student | any = this.students.find(stu => stu.getID() === id
        // )
        // this.displayInfo(foundStu);
        let foundStu = this.students.find(stu => stu.getID() === id);
        if (foundStu) {
            this.displayInfo(foundStu);
        }
        else {
            console.log(`id: ${id} sv ko ton tai`);
        }
    }
    addStudentInClass() {
        if (studentList[0]) {
            this.students.push(studentList[0]);
        }
        studentList.shift();
    }
}
let student1 = new Student(1, "ABC");
let student2 = new Student(2, "DEF");
let student3 = new Student(3, "GHI");
let student4 = new Student(4, "JKL");
let student5 = new Student(5, "MNO");
let student6 = new Student(6, "PQR");
studentList.push(student1, student2, student3, student4, student5, student6);
let classA = new ClassRoom();
classA.addStudentInClass();
classA.addStudentInClass();
classA.addStudentInClass();
classA.addStudentInClass();
classA.addStudentInClass();
classA.addStudentInClass();
classA.showStudent();
export {};
//# sourceMappingURL=ep6_verHonest.js.map