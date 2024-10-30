class Addition {
	constructor(num1, num2) {
		this.num1 = num1;
		this.num2 = num2;
	}
	addition() {
		return this.num1 + this.num2;
	}
}
class Substraction extends Addition {
	substraction() {
		return this.num1 - this.num2;
	}
}

class Multiplication extends Addition {
	multiplication() {
		return this.num1 * this.num2;
	}
}

class Division extends Addition {
	division() {
		return this.num1 / this.num2;
	}
}

const add = new Addition(10, 20);
console.log('Add : ', add.addition());

const sub = new Substraction(10.2);
console.log('S-Add : ', sub.addition());
console.log('S-Sub : ', sub.substraction());

const multi = new Multiplication(10, 20);

const div = new Division(10, 20);
console.log('D-Add : ', sub.addition());
console.log('D-Sub : ', sub.substraction());
console.log('D-Mul : ', sub.multiplication());
console.log('D-Div : ', sub.division());
