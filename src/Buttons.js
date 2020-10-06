import React, { Component } from 'react';

class Buttons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
    }

    decrement = () => {
        let newNum = this.state.num - 1
        this.setState({num: newNum})
    }

    increment = () => {
        let newNum = this.state.num + 1
        this.setState({num: newNum})
    }

    reset = () => {
        let newNum = 0
        this.setState({num: newNum})
    }

    render() {
        return (
            <div>      
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.reset}>Reset</button>
                <p>{this.state.num}</p>
            </div>
        );
    }
}

export default Buttons;
