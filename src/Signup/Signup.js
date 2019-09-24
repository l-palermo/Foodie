import React, { Component } from 'react';
import Input from '../Components/Input'

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: ""
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e) {
    alert(`The value is ${this.input.value}`);
    e.preventDefault();
  }

  // handleFullName(e) {
  //   let value = e.target.value;
  //   this.setState(prevState => ({
  //     newUser:
  //       { ...prevState.newUser, name: value }
  //   }))
  // }

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
      <Input type={'text'}
        title={'Full Name'}
        name={'name'}
        value={this.state.newUser.name}
        placeholder={'Enter Your Name'}
        handleChange={this.handleInput}
      />
    );
  }

}

export default Signup

