import { useEffect, useState } from "react";
import { fetchUsers } from "../services/fetchFilms";
import { UsersList } from "./UsersList";
import { ButtonCreate } from "./ButtonCreate";
import { Loader } from "./Loader";
import { Modal } from "./Modal";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [page] = useState(2);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function searchUSers() {
      try {
        setLoading(true);
        const results = await fetchUsers(page);
        setUsers(results.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    searchUSers();
  }, [page]);

  // const addUser = () => {};

  const deleteUserLocal = (userId) => {
    setUsers((prevState) => prevState.filter((users) => users._id !== userId));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section>
      <ButtonCreate showModal={toggleModal} buttonName={"Create user"} />

      {loading ? (
        <Loader />
      ) : (
        users.length > 0 && (
          <UsersList users={users} deleteUserLocal={deleteUserLocal} />
        )
      )}

      {/* {users.length === 0 && <h3>There is no users</h3>} */}

      {showModal && (
        <Modal onClose={toggleModal}>
          <h2>Create user form</h2>
        </Modal>
      )}
    </section>
  );
};
