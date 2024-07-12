// class component
// function component
import React from "react";
import AddUserInfo from "./AddUserInfo";
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
  handleAddNewUser = (userObject) => {
    this.setState({
      listUsers: [userObject, ...this.state.listUsers],
    });
  };
  handleDeleteUser = (id) => {
    let listUsersClone = this.state.listUsers;
    listUsersClone = listUsersClone.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      listUsers: listUsersClone,
    });
  };
  // jsx
  render() {
    return (
      <div>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <br /> <br />
        <DisplayInfo
          handleDeleteUser={this.handleDeleteUser}
          listUsers={this.state.listUsers}
        />
      </div>
    );
  }
}
export default MyComponent;
