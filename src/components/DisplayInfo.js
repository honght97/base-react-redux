import React from "react";
class DisplayInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }

  handleToggleListUsers() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }
  render() {
    // porps => viet tat properties(thuoc tinh / tai san)
    // desctructuring array/object
    const { listUsers, handleDeleteUser } = this.props;
    console.log(handleDeleteUser);

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
                  <button
                    onClick={() => {
                      handleDeleteUser(user.id);
                    }}
                  >
                    Delete
                  </button>
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
