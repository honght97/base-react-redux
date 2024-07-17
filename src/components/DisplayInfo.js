import React from "react";
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
  return (
    <>
      {true && (
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
