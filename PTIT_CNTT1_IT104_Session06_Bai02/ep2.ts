abstract class Job {
  protected type: string;

  constructor(type: string) {
    this.type = type;
  }

  printType(): void {
    console.log(this.type);
  }

  abstract calculateSalary(): number;
}

class PartTimeJob extends Job {
  workingHours: number;

  constructor(workingHours: number) {
    super("Part-time");
    this.workingHours = workingHours;
  }

  calculateSalary(): number {
    return this.workingHours * 30000;
  }
}

class FullTimeJob extends Job {
  static readonly BASE_SALARY = 10_000_000;

  constructor() {
    super("Full-time");
  }

  calculateSalary(): number {
    return FullTimeJob.BASE_SALARY;
  }
}

const pt = new PartTimeJob(40);
const ft = new FullTimeJob();

console.log("Part-time job:");
pt.printType();
console.log("Salary:", pt.calculateSalary());

console.log("\nFull-time job:");
ft.printType();
console.log("Salary:", ft.calculateSalary());
