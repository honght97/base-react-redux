// class component
// function component
import React from "react";
import AddUserInfo from "./AddUserInfo";
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
  handleAddNewUser = (userObj) => {
    // alert("me");
    // console.log(">>> check data from parents", userObj);
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };
  render() {
    // const myInfo = ["ab", "c", "d"];
    //DRY - don't repeat yourself
    return (
      <div>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <br />
        <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}
export default MyComponent;
