import React, { useState } from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";

// class DisplayInfo extends React.Component {
//   render() {
//     const { listUsers, handleDeleteUser } = this.props;
//     return (
//       <div className="display-info">
//         {true && (
//           <>
//             {listUsers.map((user, index) => {
//               return (
//                 <div className={user.age > 22 ? "green" : "red"} key={user.id}>
//                   <div>
//                     My name's {user.name} and i'm {user.age} years old
//                   </div>
//                   <div>
//                     <button onClick={() => handleDeleteUser(user.id)}>
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

// convert to stateless
const DisplayInfo = (props) => {
  const { listUsers, handleDeleteUser } = props;
  const [isShowHideListUser, setShowHideListUser] = useState(true);
  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };
  return (
    <div className="display-info">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {" "}
          {!isShowHideListUser ? "Show" : "Hide"} list users
        </span>
      </div>
      {isShowHideListUser && (
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
};
export default DisplayInfo;
