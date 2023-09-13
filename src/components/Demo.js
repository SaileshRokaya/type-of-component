import React from "react";

export default function Demo(props) {
    console.log(props);
  return (
    <>
      <h3>{props.number}</h3>
    </>
  );
}
