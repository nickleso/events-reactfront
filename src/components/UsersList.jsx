import { Link } from "react-router-dom";
import { ButtonDelete } from "./ButtonDelete";

export const UsersList = ({ users, deleteUserLocal }) => {
  return (
    <ul>
      {users.map(
        ({ _id, firstName, lastName, email, phoneNumber, eventsCount }) => (
          <li key={_id}>
            <Link
              to={`${_id}/events`}
              style={{
                color: "#058bf8",
              }}
            >
              <p>
                Username: {firstName} {lastName}
              </p>

              <p>Email: {email}</p>
              <p>Phone: {phoneNumber}</p>
              <p>Events: {eventsCount}</p>
              <p>Next Event: </p>
            </Link>

            <ButtonDelete id={_id} onDeleteUserBtn={deleteUserLocal} />
          </li>
        )
      )}
    </ul>
  );
};
