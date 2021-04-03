'use strict';

// Classes

// methods inside classes don't separates with semicolon!!!

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, weight, text, bgColor) {
        // parent class constructor - super() should always be first 
        // in children class constructor
        super(height, weight);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello', 'cyan');

div.showMyProps(); // Text: Hello, color: cyan
console.log(div.calcArea()); // 250

const square = new Rectangle(10, 10);
const long = new Rectangle(30, 100);

console.log(square.calcArea()); // 100
console.log(long.calcArea()); // 3000