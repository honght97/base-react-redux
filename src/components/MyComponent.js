// class component
// function component
import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "hong",
    age: 27,
    address: "HCM",
  };
  render() {
    return (
      <div>
        my name is {this.state.name} and i'm from {this.state.address}
      </div>
    );
  }
}
export default MyComponent;
