import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
  return (
    <>
      <div className="manage-user">
        <div className="title">Manage User</div>
        <div className="users-content">
          <div>
            <ModalCreateUser />
          </div>
          <div>table users</div>
        </div>
      </div>
    </>
  );
};
export default ManageUser;
