import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    alert(`The value is ${this.input.value}`);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <span>Hello World</span>

        <input type="submit" value="Sign Up" />
      </form >
    );
  }

}

export default Signup

