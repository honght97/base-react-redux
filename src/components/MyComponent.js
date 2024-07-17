// class component
// function component
import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Hoi Dan IT", age: 30 },
//       { id: 2, name: "Eric", age: 26 },
//       { id: 3, name: "HarryPhamDev", age: 28 },
//       { id: 4, name: "BK", age: 35 },
//     ],
//   };
//   handleAddNewUser = (userObject) => {
//     this.setState({
//       listUsers: [userObject, ...this.state.listUsers],
//     });
//   };
//   handleDeleteUser = (id) => {
//     let listUsersClone = this.state.listUsers;
//     listUsersClone = listUsersClone.filter((item) => {
//       return item.id !== id;
//     });
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };
//   // jsx
//   render() {
//     return (
//       <div>
//         <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
//         <br /> <br />
//         <DisplayInfo
//           handleDeleteUser={this.handleDeleteUser}
//           listUsers={this.state.listUsers}
//         />
//       </div>
//     );
//   }
// }
const MyComponent = () => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Hoi Dan IT", age: 30 },
    { id: 2, name: "Eric", age: 26 },
    { id: 3, name: "HarryPhamDev", age: 28 },
    { id: 4, name: "BK", age: 35 },
  ]);
  const handleAddNewUser = (userObject) => {
    const listUsersNew = [userObject, ...listUsers];
    setListUsers(listUsersNew);
  };
  const handleDeleteUser = (id) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => {
      return item.id !== id;
    });
    setListUsers(listUsersClone);
  };
  return (
    <div>
      <AddUserInfo handleAddNewUser={handleAddNewUser} />
      <br /> <br />
      <DisplayInfo handleDeleteUser={handleDeleteUser} listUsers={listUsers} />
    </div>
  );
};
export default MyComponent;
