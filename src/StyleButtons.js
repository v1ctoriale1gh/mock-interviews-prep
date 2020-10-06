import React, { Component } from 'react';

class StyleButtons extends Component {

    state = {
        buttonOne: true,
        buttonTwo: false
    }

    handleClickOne = () => {
        this.setState({...this.state, buttonOne: !this.state.buttonOne, buttonTwo: !this.state.buttonTwo})
        console.log(this.state)
    }

    handleClickTwo = () => {
        this.setState({...this.state, buttonOne: !this.state.buttonOne, buttonTwo: !this.state.buttonTwo})
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <button id="button-1" onClick={this.handleClickOne} style={{
                    fontWeight: this.state.buttonOne === true ? "normal" : "bold"
                }}>button 1</button>
                <button id="button-2" onClick={this.handleClickTwo} style={{
                    fontWeight: this.state.buttonTwo === true ? "normal" : "bold"
                }}>button 2</button>
            </div>
        );
    }
}

export default StyleButtons;
