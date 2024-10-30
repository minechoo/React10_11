import React from "react";

class Student extends React.Component{
    constructor(props){
        super(props)
        this.name = props.name
        this.major = props.major
    }

    render(){
        return(
            <>
                안녕하세요! 저는 {this.name} 입니다. 저는 {this.major} 개발자 입니다. <br/>
            </>
        )
    }

}

export default Student