console.log("inside warmup file");
class Circle{
    constructor(raius) {
        this.radius = raius;
    }
    getDiameter() {
        return 2 * this.radius;
    }
    getCircumference() {
        return 2 * 3.14 * this.radius;
    }
    getArea() {
        return 3.14 * (this.radius * this.radius);
    }
};
const c1 = new Circle(5);
const c2 = new Circle(4);
const c3 = new Circle(2);
console.log(`Circle 1 : Diameter = ${c1.getDiameter().toFixed(2)}, Circumference = ${c1.getCircumference().toFixed(2)}, Area = ${c1.getArea().toFixed(2)}`)
console.log(`Circle 2 : Diameter = ${c2.getDiameter().toFixed(2)}, Circumference = ${c2.getCircumference().toFixed(2)}, Area = ${c2.getArea().toFixed(2)}`)
console.log(`Circle 3 : Diameter = ${c3.getDiameter().toFixed(2)}, Circumference = ${c3.getCircumference().toFixed(2)}, Area = ${c3.getArea().toFixed(2)}`)