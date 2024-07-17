import React from "react";
class DisplayInfo extends React.Component {
  constructor(props) {
    // console.log(">>> contructor 1");
    super(props);
    this.state = {
      isShow: true,
    };
  }
  // componentDidMount => được chạy khi có dữ liệu trong dom
  componentDidMount() {
    // console.log(">>> function did mount");
    setTimeout(function () {
      document.title = "Title of pages";
    }, 1000);
  }
  // muốn component update đến 1 thời điểm nào đó => và cần làm 1 cái gì đó khi tới thời điểm đó.
  componentDidUpdate(prevProps, prevState, snapShot) {
    // console.log(">>> function did update", this.props, prevProps);
    if (this.props.listUsers !== prevProps.listUsers) {
      if (this.props.listUsers.length === 5) {
        alert("you got 5 users");
      }
    }
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
    // console.log(handleDeleteUser);
    // console.log(">>> render");
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
