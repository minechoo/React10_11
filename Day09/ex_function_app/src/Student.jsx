import React from 'react';

class Student extends React.Component {
	constructor(props) {
		super(props);
		this.name = props.name;
	}
	render() {
		return <>안녕하세요! 저는 {this.name} 입니다.</>;
	}
}

export default Student;
