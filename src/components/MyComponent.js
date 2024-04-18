// class component
// function component
import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       {
//         id: 1,
//         name: "hong",
//         age: 20,
//       },
//       {
//         id: 2,
//         name: "hong 1",
//         age: 24,
//       },
//       {
//         id: 3,
//         name: "hong 2",
//         age: 26,
//       },
//     ],
//   };
//   handleAddNewUser = (userObj) => {
//     // alert("me");
//     // console.log(">>> check data from parents", userObj);
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };
//   handleDeleteUser = (userId) => {
//     let listUsersClone = [...this.state.listUsers];
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };
//   render() {
//     // const myInfo = ["ab", "c", "d"];
//     //DRY - don't repeat yourself
//     return (
//       <div>
//         <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
//         <br />
//         <br />
//         <DisplayInfo
//           listUsers={this.state.listUsers}
//           handleDeleteUser={this.handleDeleteUser}
//         />
//       </div>
//     );
//   }
// }
const MyComponent = () => {
  const [listUsers, setListUsers] = useState([
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
  ]);
  const handleAddNewUser = (userObj) => {
    // setListUsers((previousState) => {
    //   return [userObj, ...previousState];
    // });
    setListUsers([userObj, ...listUsers]);
  };
  const handleDeleteUser = (userId) => {
    let listUsersClone = [...listUsers];
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setListUsers(listUsersClone);
  };
  return (
    <div>
      <AddUserInfo handleAddNewUser={handleAddNewUser} />
      <br />
      <br />
      <DisplayInfo listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};
export default MyComponent;
