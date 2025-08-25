abstract class Shape{
    name : string;

    getName() : string{
        return this.name;
    }

    abstract getSize() : number;
}

class Rectangle extends Shape{
    width : number;
    height : number;

    getSize(): number {
        return this.width * this.height;
    }
}

let rec = new Rectangle();
rec.name = "Rectangle";
rec.width = 10;
rec.height = 20;

console.log(rec.getName());
console.log(rec.getSize());