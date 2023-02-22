import { deleteUserFromDB } from "../services/fetchFilms";

export const ButtonDelete = ({ id, onDeleteUserBtn }) => {
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
