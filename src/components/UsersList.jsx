import { Link } from "react-router-dom";
import { ButtonDeleteUser } from "./ButtonDeleteUser";

export const UsersList = ({ users, deleteUserLocal }) => {
  return (
    <ul className="user-list">
      {users.map(
        ({ _id, firstName, lastName, email, phoneNumber, eventsCount }) => (
          <li className="user-item" key={_id}>
            <Link
              to={`${_id}/events`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <p>
                Username: {firstName} {lastName}
              </p>
              <p>Email: {email}</p>
              <p>Phone: {phoneNumber}</p>
              {/* <p>Events: {eventsCount}</p>
              <p>Next Event: </p> */}
            </Link>

            <ButtonDeleteUser id={_id} onDeleteUserBtn={deleteUserLocal} />
          </li>
        )
      )}
    </ul>
  );
};
