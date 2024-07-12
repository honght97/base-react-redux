import React from "react";
class DisplayInfo extends React.Component {
  state = {
    isShow: true,
  };
  handleToggleListUsers() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }
  render() {
    // porps => viet tat properties(thuoc tinh / tai san)
    // desctructuring array/object
    const { listUsers } = this.props;
    // console.log(this.props);

    return (
      <>
        <div>
          <button
            onClick={() => {
              this.handleToggleListUsers();
            }}
          >
            {this.state.isShow ? "Hide " : "Show "}
            list user
          </button>
        </div>
        {this.state.isShow && (
          <ul>
            {listUsers.map((user) => {
              return (
                <li key={user.id} className={+user.age > 28 ? "red" : "green"}>
                  My name's {user.name} and i'm {user.age} years old
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}
export default DisplayInfo;
