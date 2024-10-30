/*
class -Field
      -constuctor (생성자)
      -Method
      로 구성되어있고
      데이터 전달방법과 상기의 3개로 구성할 수 있다
      
      1.field를 통한 전달 방법
*/
//import CalcField2 from './CalcField2';

class CalcField {
	//Field
	num1 = 0;
	num2 = 0; //전역변수

	//Constuctor

	//Method
	addition() {
		return this.num1 + this.num2;
	}

	subtraction() {
		return this.num1 - this.num2;
	}
}

const calcField = new CalcField();
calcField.num1 = 10;
calcField.num2 = 20;
console.log('덧셈: ', calcField.addition());
console.log('뺄셈: ', calcField.subtraction());

// const calcField2 = new CalcField2();
// calcField2.num1 = 10;
// calcField2.num2 = 20;
// console.log('덧셈: ', calcField2.addition());
// console.log('뺄셈: ', calcField2.subtraction());

//Constuctor를 통해 데이터 전달

class CalcConstructor {
	num1 = 0;
	num2 = 0;

	construtor(num1, num2) {
		this.num1 = num1;
		this.num2 = num2;
	}

	//Method
	addition() {
		return this.num1 + this.num2;
	}
}

const calcConstructor = new CalcConstructor(10, 20);
console.log(calcConstructor.addition());

//Method
class CalcMethod {
	//-Field
	//-constuctor 없어도 됨
	addition(num1, num2) {
		return num1 + num2;
	}
}

const calcMethod = new CalcMethod();
console.log(calcMethod.addition(10, 20));

class Student {
	constructor(name, major) {
		this.name = name;
		this.major = major;
	}
	introduce() {
		return `안녕하세요! 저는 ${this.name}입니다. 저는 ${this.major}개발자 입니다`;
	}
}

//me라는 instance
const me = new Student('홍길동', 'javascript');
console.log(me.introduce());

//you 라는 instance
const you = new Student('유비', 'ReacJs');
console.log(you.introduce());

console.log(me === you);

//상속
class Thanks extends Student {
	sayBye() {
		return '감사합니다';
	}
}

const him = new Thanks('관우', 'Vue');
console.log(him.introduce());
console.log(him.sayBye());
