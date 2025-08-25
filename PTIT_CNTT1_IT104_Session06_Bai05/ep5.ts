interface changeSpeed {
  speedUp(amount?: number): void;   // tăng tốc (mặc định 1)
  slowDown(amount?: number): void;  // giảm tốc (mặc định 1)
  stop(): void;                     // dừng (đưa speed về 0)
}

// Lớp Vehicle implements changeSpeed
class Vehicle implements changeSpeed {
  private speed: number;

  constructor(initialSpeed = 0) {
    this.speed = initialSpeed;
  }

  // helper: lấy tốc độ hiện tại
  public getSpeed(): number {
    return this.speed;
  }

  // Tăng tốc: nếu không truyền amount thì tăng 1
  speedUp(amount = 1): void {
    if (amount <= 0) {
      console.warn("Amount to speed up must be positive.");
      return;
    }
    this.speed += amount;
    console.log(`Speed up by ${amount}. Current speed: ${this.speed}`);
  }

  // Giảm tốc: nếu amount lớn hơn speed thì speed về 0 (không âm)
  slowDown(amount = 1): void {
    if (amount <= 0) {
      console.warn("Amount to slow down must be positive.");
      return;
    }
    this.speed -= amount;
    if (this.speed < 0) this.speed = 0;
    console.log(`Slow down by ${amount}. Current speed: ${this.speed}`);
  }

  // Dừng phương tiện: speed = 0
  stop(): void {
    this.speed = 0;
    console.log(`Vehicle stopped. Current speed: ${this.speed}`);
  }
}

// Ví dụ sử dụng
const car = new Vehicle(5); // khởi tạo với tốc độ ban đầu = 5
console.log("Initial speed:", car.getSpeed());

car.speedUp();        // tăng 1
car.speedUp(10);      // tăng 10
car.slowDown(3);      // giảm 3
car.slowDown(20);     // giảm lớn hơn speed -> về 0
car.speedUp(7);       // tăng 7
car.stop();           // dừng -> 0
