import { useEffect, useState } from "react";
import { addUserToDB, fetchUsers } from "../services/fetchUsersEvents";
import { nanoid } from "nanoid";

import { UsersList } from "./UsersList";
import { ButtonCreate } from "./ButtonCreate";
import { Loader } from "./Loader";
import { Modal } from "./Modal";
import { UserCreateForm } from "./UserCreateForm";
import { ButtonLoadMore } from "./ButtonLoadMore";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    async function searchUSers() {
      try {
        setLoading(true);
        setShowButton(true);

        const results = await fetchUsers(page);
        setUsers(results.data);
      } catch (error) {
        console.log(error);
        setShowButton(false);
      }

      setLoading(false);
    }
    searchUSers();
  }, [page]);

  const addUser = ({ firstName, lastName, email, phoneNumber }) => {
    const user = {
      _id: nanoid(10),
      firstName,
      lastName,
      email,
      phoneNumber,
    };

    addUserToDB({ firstName, lastName, email, phoneNumber });
    setUsers([user, ...users]);
  };

  const deleteUserLocal = (userId) => {
    setUsers((prevState) => prevState.filter((users) => users._id !== userId));
  };

  const loadNextUsers = () => {
    setPage((prevState) => prevState + 1);
  };

  const loadPrevUsers = () => {
    setPage((prevState) => prevState - 1);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <ButtonCreate showModal={toggleModal} buttonName={"Create user"} />

      {loading ? (
        <Loader />
      ) : (
        users.length > 0 && (
          <UsersList users={users} deleteUserLocal={deleteUserLocal} />
        )
      )}

      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
        }}
      >
        {page !== 1 && (
          <ButtonLoadMore loadMoreUsers={loadPrevUsers} buttonName={"prev"} />
        )}

        {users.length === 5 && showButton && (
          <ButtonLoadMore loadMoreUsers={loadNextUsers} buttonName={"next"} />
        )}
      </div>

      {showModal && (
        <Modal onClose={toggleModal}>
          <UserCreateForm onClose={toggleModal} onSubmit={addUser} />
        </Modal>
      )}
    </div>
  );
};
