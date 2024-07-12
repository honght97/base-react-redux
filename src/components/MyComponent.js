// class component
// function component
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  // jsx
  render() {
    return (
      <div>
        <UserInfo />
        <br /> <br />
        <DisplayInfo name="Hoi Dan IT" age="30" />
      </div>
    );
  }
}
export default MyComponent;
