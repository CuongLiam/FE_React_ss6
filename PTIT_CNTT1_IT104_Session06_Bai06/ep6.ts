// // Lớp Student
// class Student {
//   private id: number;
//   private name: string;

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }

//   // Getter để truy cập an toàn từ bên ngoài (nếu cần)
//   getId(): number {
//     return this.id;
//   }

//   getName(): string {
//     return this.name;
//   }

//   // Dùng khi in
//   toString(): string {
//     return `(${this.id}) ${this.name}`;
//   }
// }

// // Mảng chứa tất cả học sinh (nguồn)
// const allStudents: Student[] = [];

// // Lớp Classroom
// class Classroom {
//   students: Student[];

//   constructor() {
//     this.students = [];
//   }

//   // In danh sách học sinh trong lớp
//   showStudents(): void {
//     if (this.students.length === 0) {
//       console.log("Classroom is empty.");
//       return;
//     }
//     console.log("Students in classroom:");
//     for (const s of this.students) {
//       console.log(" -", s.toString());
//     }
//   }

//   // Thêm 1 đối tượng Student vào lớp (nếu chưa có)
//   addStudent(student: Student): boolean {
//     const exists = this.students.some((s) => s.getId() === student.getId());
//     if (exists) {
//       console.warn(`Student ${student.toString()} is already in the classroom.`);
//       return false;
//     }
//     this.students.push(student);
//     return true;
//   }

//   // Lọc (tìm) học sinh theo id trong lớp, trả về Student | undefined
//   filterStudent(id: number): Student | undefined {
//     return this.students.find((s) => s.getId() === id);
//   }

//   /**
//    * Thêm học sinh từ mảng allStudents vào lớp.
//    * Sau khi thêm thành công, xóa học sinh khỏi allStudents (mutate).
//    * Trả về true nếu thêm thành công, false nếu không có học sinh đó trong allStudents
//    * hoặc học sinh đã có trong lớp.
//    */
//   addStudentInClass(id: number, sourceStudents: Student[]): boolean {
//     const idx = sourceStudents.findIndex((s) => s.getId() === id);
//     if (idx === -1) {
//       console.warn(`No student with id=${id} found in source list.`);
//       return false;
//     }

//     const student = sourceStudents[idx];

//     // Nếu đã có trong lớp thì không thêm, cũng không xoá khỏi source
//     if (this.students.some((s) => s.getId() === id)) {
//       console.warn(`Student ${student.toString()} already exists in this classroom.`);
//       return false;
//     }

//     // Thêm vào lớp
//     this.students.push(student);

//     // Xóa khỏi mảng nguồn
//     sourceStudents.splice(idx, 1);
//     return true;
//   }
// }

// // --- Tạo 6 thực thể Student và thêm vào allStudents ---
// allStudents.push(new Student(1, "An"));
// allStudents.push(new Student(2, "Binh"));
// allStudents.push(new Student(3, "Chi"));
// allStudents.push(new Student(4, "Duc"));
// allStudents.push(new Student(5, "Lan"));
// allStudents.push(new Student(6, "Minh"));

// console.log("All students (initial):");
// for (const s of allStudents) console.log(" -", s.toString());
// console.log("");

// // --- Tạo 2 Classroom và phân học sinh (mỗi lớp 3 học sinh) ---
// const classA = new Classroom();
// const classB = new Classroom();

// // Ví dụ: thêm id 1,2,3 vào classA; id 4,5,6 vào classB
// classA.addStudentInClass(1, allStudents);
// classA.addStudentInClass(2, allStudents);
// classA.addStudentInClass(3, allStudents);

// classB.addStudentInClass(4, allStudents);
// classB.addStudentInClass(5, allStudents);
// classB.addStudentInClass(6, allStudents);

// // In danh sách từng lớp
// console.log("\nClass A:");
// classA.showStudents();

// console.log("\nClass B:");
// classB.showStudents();

// // In mảng allStudents sau khi phân (phải rỗng)
// console.log("\nAll students (after distributing):", allStudents);
