class Student{
    private id : number;
    private name : string;
    
    constructor(id : number, name : string){
        this.id = id;
        this.name = name;
    }

    getID() : number{
        return this.id;
    }
    getName() : string{
        return this.name;
    }

    setName(name : string) : void{
        this.name = name;
    }
    setId(id : number) : void{
        this.id = id;
    }

}

let studentList : Student[] = [];

class ClassRoom{
    private students : Student[] = [];

    displayInfo(stu : Student){
        console.log(`${stu.getID()}: ${stu.getName()}`);
    }
    showStudent() : void{
        this.students.forEach((stu) =>{
            console.log(`${stu.getID()}: ${stu.getName()} \n`);
        })
    }

    addStudent(stu : Student) : void{
        this.students.push(stu);
    }

    filterStudent(id : number) : void{
        // let foundStu : Student | any = this.students.find(stu => stu.getID() === id
        // )

        // this.displayInfo(foundStu);

        let foundStu = this.students.find(stu=> stu.getID() === id);

        if(foundStu){
            this.displayInfo(foundStu);
        } else{
            console.log(`id: ${id} sv ko ton tai`);
        }
    }
    addStudentInClass():void{
        if(studentList[0]){
            this.students.push(studentList[0]);
        }
        studentList.shift();
    }

    removeStudent(id : number):void{
        let stuToDel = this.students.find(stu=> stu.getID() === id);

        if(stuToDel){
            id--;
            this.students.splice(id, 1);
        } else{
            console.log("did not find this id");
        }
    }

    editStudent(id : number, editName: string):void{
        let stuToEdit : Student | any = this.students.find(stu=>stu.getID() === id);

        let idxToEdit = this.students.indexOf(stuToEdit);
        if(idxToEdit != -1){
            this.students[idxToEdit]?.setName(editName);
        }
    }
}

let student1 = new Student(1, "ABC");
let student2 = new Student(2, "DEF");
let student3 = new Student(3, "GHI");
let student4 = new Student(4, "JKL"); //*
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

console.log(`=====================`);
classA.removeStudent(4);
classA.showStudent();

console.log(`=====================`);
classA.editStudent(1, "BALLS");
classA.showStudent();