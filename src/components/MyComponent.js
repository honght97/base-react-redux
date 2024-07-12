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
  handleClick(event) {
    console.log("my name is: ", this.state.name);
    // merge state => react class
    this.setState({
      name: "HarryPhamDev",
    });
  }

  // jsx
  render() {
    return (
      <div>
        My name is {this.state.name} and i'm from {this.state.address}
        <br />
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          click me
        </button>
      </div>
    );
  }
}
export default MyComponent;
