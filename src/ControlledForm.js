import React, { Component } from 'react';

class ControlledForm extends Component {

    state = {
        firstName: "",
        lastName: ""
    }

    handleInput = (e) => {
        let value = e.target.value
        let inputName = e.target.name
        this.setState(
            {[inputName]: value})
      }


    render() {
        return (
            <div>
                <label value="first-name">First Name</label>
                <input name="firstName" onChange={this.handleInput} value={this.state.firstName}></input>
                <label value="last-name">Last Name</label>
                <input name="lastName" onChange={this.handleInput} value={this.state.lastName}></input>
            </div>
        );
    }
}

export default ControlledForm;
