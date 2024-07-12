// class component
// function component
import React from "react";
class MyComponent extends React.Component {
  // state
  state = {
    name: "Eric",
    address: "Hoi Dan IT",
    age: 26,
  };

  // jsx
  render() {
    return (
      <div>
        My name is {this.state.name} and i'm from {this.state.address}
      </div>
    );
  }
}
export default MyComponent;
