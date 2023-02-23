import { deleteEventFromDB } from "../services/fetchUsersEvents";

export const ButtonDeleteEvent = ({ id, userId, onDeleteEventBtn }) => {
  const deleteUserFunc = () => {
    deleteEventFromDB(id, userId);
    onDeleteEventBtn(id);
  };

  return (
    <button onClick={deleteUserFunc} type="button">
      Delete event
    </button>
  );
};
