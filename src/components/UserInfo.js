import React from "react";
class UseInfo extends React.Component {
  state = {
    name: "hong",
    age: 27,
    address: "HCM",
  };
  handleOnChangeInput = (event) => {
    // console.log(event, event.target.value);
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    // console.log(event, event.target.value);
    this.setState({
      age: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <>
        my name is {this.state.name} and i'm from {this.state.age}
        <form action="" onSubmit={(event) => this.handleSubmit(event)}>
          <label>Your name: </label>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <br />
          <label>Your age: </label>
          <input
            type="text"
            value={this.state.age}
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>submit</button>
        </form>
      </>
    );
  }
}
export default UseInfo;
