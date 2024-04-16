import React from "react";
import "./DisplayInfo.scss";

class DisplayInfo extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    // console.log(this.props);z
    //destructuring array
    const { listUsers } = this.props;
    // console.log(listUsers);
    return (
      <div className="display-info">
        <div>
          <span onClick={() => this.handleShowHide()}>
            {this.state.isShowListUser ? "hide" : "show"} list users:{" "}
          </span>
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user, index) => {
              return (
                <div className={user.age > 22 ? "green" : "red"} key={user.id}>
                  My name's {user.name} and i'm {user.age} years old
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default DisplayInfo;
