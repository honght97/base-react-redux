// class component
// function component
import React from "react";
import UseInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  render() {
    const myInfo = ["ab", "c", "d"];
    return (
      <div>
        <UseInfo />
        <br />
        <br />
        <DisplayInfo name={"hong111"} age={26} myInfo={myInfo} />
      </div>
    );
  }
}
export default MyComponent;
