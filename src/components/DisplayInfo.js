import React, { useEffect, useState } from "react";
// stateless => không hề có state => có thể chuyển thành function
// statefull => khi có state => buộc phải dùng class => hook ra đời => dùng được state ngay bên trong function
// class DisplayInfo extends React.Component {
//   render() {
//     const { listUsers, handleDeleteUser } = this.props;
//     return (
//       <>
//         {true && (
//           <ul>
//             {listUsers.map((user) => {
//               return (
//                 <li key={user.id} className={+user.age > 28 ? "red" : "green"}>
//                   My name's {user.name} and i'm {user.age} years old
//                   <button
//                     onClick={() => {
//                       handleDeleteUser(user.id);
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         )}
//       </>
//     );
//   }
// }
const DisplayInfo = (props) => {
  const { listUsers, handleDeleteUser } = props;
  const [isToggle, setIsToggle] = useState(true);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  useEffect(() => {
    if (listUsers.length === 0) {
      alert("you deleted all the users");
    }
  }, [listUsers]);
  return (
    <>
      <div>
        <button onClick={() => handleToggle()}>
          {isToggle ? "Hide list users" : "Show list users"}
        </button>
      </div>
      {isToggle && (
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
};
export default DisplayInfo;
