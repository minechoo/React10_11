function traditionalFunction() {
	return 'Hello';
}

const traditionalFunction2 = function () {
	return 'Hello';
};

//arrow
const modernFunction = () => {
	return 'hi';
};

const modernFunction2 = () => 'hi, too';

const modernFunction3 = (name, job) => {
	return `Hi, My name is ${name} and my jov is ${job}`;
};

console.log(modernFunction3('James', 'ReactJS Developer'));
//Hi, My name is James and my job is ReactJS Developer
