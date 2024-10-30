import React from 'react';
class Student extends React.Component {
	constructor(props) {
		super(props);
		this.name = props.name;
	}

	render() {
		return <div>안녕하세요! 저는 {this.name}입니다. 저는 ReactJS 개발자입니다</div>;
	}
}

export default Student;
