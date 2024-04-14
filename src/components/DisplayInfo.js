import React from "react";

class DisplayInfo extends React.Component {
  render() {
    console.log(this.props);
    //destructuring array
    const { age, name } = this.props;
    return (
      <>
        <div>My name is: {name}</div>
        <div>My age's: {age}</div>
      </>
    );
  }
}
export default DisplayInfo;
