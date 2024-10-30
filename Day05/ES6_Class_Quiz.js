//도형 클래스 만들기
class Shape {
	constructor(color) {
		this.color = color; //내 정보는 this
	}

	getArea() {
		return 0;
	}

	describe() {
		return `This shape is ${this.color}`;
	}
}

class Circle extends Shape {
	constructor(color, radius) {
		super(color); //부모에게 주는거 super
		this.radius = radius;
	}
	getArea() {
		return Math.PI * this.radius ** 2;
	}
	describe() {
		return `${super.describe()} It's circle woth radius ${this.radius}`;
	}
}

//사용 예
const circle = new Circle('red', 5);
console.log(circle.describe()); //this shape is red. it's a circle with radis 5
console.log(`Area : ${circle.getArea().toFixed(2)}`); //면적 구하기

class Rectangle extends Shape {
	constructor(color, width, height) {
		super(color);
		this.width = width;
		this.height = height;
	}

	describe() {
		return `this rectangle is ${this.color}, width: ${this.width}, height : ${this.height}`;
	}

	getArea() {
		return this.width * this.height;
	}
}

const rectangle = new Rectangle('blue', 4, 6);
console.log(rectangle.describe()); //this rectangle is blue, width: 4, height : 6
console.log(`Area : ${rectangle.getArea()}`);
