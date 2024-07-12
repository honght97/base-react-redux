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
  handleOnchangeInput(event) {
    this.setState({
      name: event.target.value,
    });
    // console.log(event.target.value);
  }
  handleOnSumbit(event) {
    event.preventDefault();
  }

  // jsx
  render() {
    return (
      <div>
        My name is {this.state.name} and i'm from {this.state.address}
        <br />
        <form
          onSubmit={(event) => {
            this.handleOnSumbit(event);
          }}
        >
          <input
            onChange={(event) => {
              this.handleOnchangeInput(event);
            }}
            type="text"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default MyComponent;
