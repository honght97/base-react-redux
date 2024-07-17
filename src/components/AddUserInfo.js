import React, { useState } from "react";
// class AddUserInfo extends React.Component {
//   // state
//   state = {
//     name: "",
//     age: "",
//     id: Math.floor(Math.random() * 1000) + 1 + "-random",
//   };
//   handleOnchangeInput(event) {
//     this.setState({
//       name: event.target.value,
//     });
//   }
//   handleOnchangeAge(event) {
//     this.setState({
//       age: event.target.value,
//     });
//   }
//   handleOnSumbit(event) {
//     event.preventDefault();
//     this.props.handleAddNewUser(this.state);
//     this.setState({
//       age: "",
//       name: "",
//     });
//   }

//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and i'm from {this.state.age}
//         <br />
//         <form
//           onSubmit={(event) => {
//             this.handleOnSumbit(event);
//           }}
//         >
//           <input
//             value={this.state.name}
//             onChange={(event) => {
//               this.handleOnchangeInput(event);
//             }}
//             type="text"
//           />
//           <br />
//           <input
//             value={this.state.age}
//             onChange={(event) => {
//               this.handleOnchangeAge(event);
//             }}
//             type="text"
//           />
//           <br />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
const AddUserInfo = ({ handleAddNewUser }) => {
  const [info, setInfo] = useState({
    name: "",
    age: "",
    id: Math.floor(Math.random() * 1000) + 1 + "-random",
  });
  const handleOnchangeInput = (event) => {
    setInfo({
      ...info,
      name: event.target.value,
    });
  };
  const handleOnchangeAge = (event) => {
    setInfo({
      ...info,
      age: event.target.value,
    });
  };
  const handleOnSumbit = (event) => {
    event.preventDefault();
    handleAddNewUser(info);
    setInfo({
      ...info,
      age: "",
      name: "",
    });
  };
  return (
    <div>
      My name is {info.name} and i'm from {info.age}
      <br />
      <form
        onSubmit={(event) => {
          handleOnSumbit(event);
        }}
      >
        <input
          value={info.name}
          onChange={(event) => {
            handleOnchangeInput(event);
          }}
          type="text"
        />
        <br />
        <input
          value={info.age}
          onChange={(event) => {
            handleOnchangeAge(event);
          }}
          type="text"
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddUserInfo;
