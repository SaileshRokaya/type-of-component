import React, { Component } from "react";
import Man from "./Man";

class Person extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state={
      name:"Sailesh",
      age:23,
    }
  }
  render() {
    return (
      <div>
        <div>Name: Sailesh Rokaya</div>
        <div>Age: 25</div>
        <h1>Dear {this.state.name}, {this.state.age} years old, Welcome to KTM</h1>
        <Man/>
      </div>
    );
  }
}

export default Person;
