import React, { Component } from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        fullname: "",
        username: "",
        dateOfBirth: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }


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
        {/* Full Name */}
        <Input type={'text'}
          title={'Full Name'}
          name={'fullname'}
          value={this.state.newUser.name}
          placeholder={'Enter Your Name'}
          onChange={this.handleInput}
        />

        {/* Username */}
        <Input type={'text'}
          title={'Username'}
          name={'username'}
          value={this.state.newUser.username}
          placeholder={'Username'}
          onChange={this.handleInput}
        />

        {/* Email */}
        <Input type={'email'}
          title={'Email'}
          name={'email'}
          value={this.state.newUser.email}
          placeholder={'Email'}
          onChange={this.handleInput}
        />

        {/* Date Of Birth */}
        <Input type={'date'}
          title={'Date Of Birth'}
          name={'dateOfBirth'}
          value={this.state.newUser.dateOfBirth}
          placeholder={'Date Of Birth'}
          onChange={this.handleInput}
        />

        {/* Password */}
        <Input type={'password'}
          title={'Password'}
          name={'password'}
          value={this.state.newUser.password}
          placeholder={'Password'}
          onChange={this.handleInput}
        />

        {/* Confirm Password */}
        <Input type={'password'}
          title={'Confirm Password'}
          name={'confirmPassword'}
          value={this.state.newUser.confirmPassword}
          placeholder={'Confirm Password'}
          onChange={this.handleInput}
        />

        {/* Submit button */}
        <Button
          action={this.handleFormSubmit}
          title={"Sign-up"} />

      </form>
    );
  }

}

export default Signup

