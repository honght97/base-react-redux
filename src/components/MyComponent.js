// class component
// function component
import React from "react";
import UseInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      {
        id: 1,
        name: "hong",
        age: 20,
      },
      {
        id: 2,
        name: "hong 1",
        age: 24,
      },
      {
        id: 3,
        name: "hong 2",
        age: 26,
      },
    ],
  };
  render() {
    // const myInfo = ["ab", "c", "d"];
    //DRY - don't repeat yourself
    return (
      <div>
        <UseInfo />
        <br />
        <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}
export default MyComponent;
