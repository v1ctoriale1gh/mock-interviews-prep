import React, { Component } from 'react';

class Counter extends Component {
    state = {
        counter: 0
    }

    startTimer = () => {
        setInterval(() => {
            if (this.state.counter < 60) { 
                let newNum = this.state.counter + 1
                this.setState({counter: newNum})
            } else {
                clearInterval()
                this.setState({counter: 0})
            }
        }, 1000)
    }

    
    render() {
        return (
            <div>
                <button onClick={this.startTimer}>Start Counter</button>
                <p>Counter: {this.state.counter}</p>
            </div>
        );
    }
}

export default Counter;
