// class component
// function component
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Hoi Dan IT", age: 30 },
      { id: 2, name: "Eric", age: 26 },
      { id: 3, name: "HarryPhamDev", age: 28 },
      { id: 4, name: "BK", age: 35 },
    ],
  };
  // jsx
  render() {
    return (
      <div>
        <UserInfo />
        <br /> <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}
export default MyComponent;
