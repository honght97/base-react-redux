import React from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";

class DisplayInfo extends React.Component {
  constructor(props) {
    console.log(">>> contructor");
    super(props);
    this.state = {
      isShowListUser: true,
    };
  }
  // state = {
  //   isShowListUser: true,
  // };
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  componentDidMount() {
    console.log(">>> call me component did mount");
    setTimeout(() => {
      document.title = "test1111";
    }, 3000);
  }
  componentDidUpdate(prevProps, prevStatem, snapshot) {
    console.log(">>> call me component did update", this.props, prevProps);
    if (this.props.listUsers !== prevProps.listUsers) {
      if (this.props.listUsers.length === 5) {
        alert("u got 5 users");
      }
    }
  }
  render() {
    // console.log(this.props);z
    //destructuring array
    console.log(">>> call me component render");
    const { listUsers, handleDeleteUser } = this.props;
    // console.log(listUsers);
    return (
      <div className="display-info">
        {/* <img src={logo} style={{ width: "150px", height: "auto" }} /> */}
        <div>
          <span onClick={() => this.handleShowHide()}>
            {this.state.isShowListUser ? "hide" : "show"} list users:{" "}
          </span>
        </div>
        {this.state.isShowListUser && (
          <>
            {listUsers.map((user, index) => {
              return (
                <div className={user.age > 22 ? "green" : "red"} key={user.id}>
                  <div>
                    My name's {user.name} and i'm {user.age} years old
                  </div>
                  <div>
                    <button onClick={() => handleDeleteUser(user.id)}>
                      Delete
                    </button>
                  </div>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}
export default DisplayInfo;
