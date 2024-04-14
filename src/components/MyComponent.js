// class component
// function component
import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "hong",
    age: 27,
    address: "HCM",
  };
  handleClick = (e) => {
    // console.log(this);
    // console.log(">>> click me my button");
    console.log("My name is  ", this.state.name);
    this.setState({
      name: "hong123",
      age: 26,
    });
  };
  render() {
    return (
      <div>
        my name is {this.state.name} and i'm from {this.state.address}
        <button
          onClick={(e) => {
            this.handleClick(e);
          }}
        >
          click me
        </button>
      </div>
    );
  }
}
export default MyComponent;
