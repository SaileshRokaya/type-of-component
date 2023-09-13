import React, { Component } from "react";
import Man from "./Man";

class Person extends Component {
//   constructor() {
//     super(props);
//   }
  render() {
    return (
      <div>
        <div>Name: Sailesh Rokaya</div>
        <div>Age: 25</div>
        <Man/>
      </div>
    );
  }
}

export default Person;
