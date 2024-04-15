import React from "react";

class DisplayInfo extends React.Component {
  render() {
    // console.log(this.props);z
    //destructuring array
    const { listUsers } = this.props;
    // console.log(listUsers);
    return (
      <>
        {listUsers.map((user, index) => {
          return (
            <div key={user.id}>
              My name's {user.name} and i'm {user.age} years old
              <hr />
            </div>
          );
        })}
      </>
    );
  }
}
export default DisplayInfo;
