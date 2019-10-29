import React, { Component } from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: ""
      }
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  // handleSubmit(e) {
  //   alert(`The value is ${this.input.value}`);
  //   e.preventDefault();
  // }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    console.log(userData);
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;

    this.setState(prevState => {
      return {
        newUser:
          { ...prevState.newUser, [name]: value }
      }

    }, () => console.log(this.state.newUser)
    )

  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <Input type={'text'}
          title={'Full Name'}
          name={'name'}
          value={this.state.newUser.name}
          placeholder={'Enter Your Name'}
          onChange={this.handleInput}
        />
        <Button
          action={this.handleFormSubmit}
          title={"Sign-up"} />
        {/* This is the submit button */}
      </form>
    );
  }

}

export default Signup

