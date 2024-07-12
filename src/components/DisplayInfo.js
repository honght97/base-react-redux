import React from "react";
class DisplayInfo extends React.Component {
  render() {
    // porps => viet tat properties(thuoc tinh / tai san)
    // desctructuring array/object
    const { name, age } = this.props;
    console.log(this.props);
    return (
      <div>
        <p>My name's {name}</p>
        <p>My age's {age}</p>
      </div>
    );
  }
}
export default DisplayInfo;
