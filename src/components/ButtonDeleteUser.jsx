import { deleteUserFromDB } from "../services/fetchUsersEvents";

export const ButtonDeleteUser = ({ id, onDeleteUserBtn }) => {
  const deleteUserFunc = () => {
    deleteUserFromDB(id);
    onDeleteUserBtn(id);
  };

  return (
    <button onClick={deleteUserFunc} type="button">
      Delete user
    </button>
  );
};
