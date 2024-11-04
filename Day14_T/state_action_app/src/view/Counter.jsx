import React from "react";


export class Counter extends React.Component {

    state = {
        myCount : 0
    }

    plus = () => {
        this.setState(stateValue => ({
            myCount : stateValue.myCount + 1
        }))
    }

    minus = () => {
        this.setState(stateValue => ({
            myCount : stateValue.myCount - 1
        }))
    }
    
    render() {
        return (
            <div>
                <input type="button" value="Plus One" onClick={this.plus}></input>
                <input type="button" value="Minus One" onClick={this.minus}></input>
                <p>Counter : {this.state.myCount}</p>
            </div>
        )
    }
}