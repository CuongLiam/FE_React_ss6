abstract class Animal {
  protected readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  sleep(): void {
    console.log(`${this.name} is sleeping...`);
  }

  abstract makeSound(): void;
}


class Dog extends Animal {
  makeSound(): void {
    console.log(`${this.name} says: Woof!`);
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log(`${this.name} says: Meow~`);
  }
}

const dog = new Dog("Buddy");
const cat = new Cat("Mimi");

dog.makeSound(); // Buddy says: Woof!
dog.sleep();     // Buddy is sleeping...

cat.makeSound(); // Mimi says: Meow~
cat.sleep();     // Mimi is sleeping...
