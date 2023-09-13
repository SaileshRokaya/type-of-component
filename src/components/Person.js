import React, { Component } from "react";
import Man from "./Man";

class Person extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        <div>Name: Sailesh Rokaya</div>
        <div>Age: 25</div>
        <h1>Dear {this.props.name}, Welcome to KTM</h1>
        <Man/>
      </div>
    );
  }
}

export default Person;
