import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  addEventToDB,
  fetchEventsByUserId,
} from "../services/fetchUsersEvents";
import { nanoid } from "nanoid";

import { EventsList } from "../components/EventsList";
import { ButtonCreate } from "../components/ButtonCreate";
import { Loader } from "../components/Loader";
import { Modal } from "../components/Modal";
import { EventCreateForm } from "../components/EventCreateForm";
import { ButtonLoadMore } from "../components/ButtonLoadMore";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    async function searchEventsByUserId() {
      try {
        setLoading(true);
        setShowButton(true);

        const results = await fetchEventsByUserId(id, page);
        setEvents(results.data);
      } catch (error) {
        console.log(error);
        setShowButton(false);
      }
      setLoading(false);
    }
    searchEventsByUserId();
  }, [id, page]);

  const addEvent = ({ title, description, startDate, endDate }) => {
    const event = {
      _id: nanoid(10),
      title,
      description,
      startDate,
      endDate,
    };
    addEventToDB({ title, description, startDate, endDate }, id);
    setEvents([event, ...events]);
  };

  const deleteEventLocal = (eventId) => {
    setEvents((prevState) =>
      prevState.filter((events) => events._id !== eventId)
    );
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
    <>
      <main>
        <section className="section">
          <div className="container">
            <h1 className="title">User events</h1>

            <ButtonCreate showModal={toggleModal} buttonName={"Create event"} />

            {loading ? (
              <Loader />
            ) : (
              events.length > 0 && (
                <EventsList
                  events={events}
                  userId={id}
                  deleteEventLocal={deleteEventLocal}
                />
              )
            )}
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            {page !== 1 && (
              <ButtonLoadMore
                loadMoreUsers={loadPrevUsers}
                buttonName={"prev"}
              />
            )}

            {events.length === 5 && showButton && (
              <ButtonLoadMore
                loadMoreUsers={loadNextUsers}
                buttonName={"next"}
              />
            )}
          </div>

          {showModal && (
            <Modal onClose={toggleModal}>
              <EventCreateForm onClose={toggleModal} onSubmit={addEvent} />
            </Modal>
          )}
        </section>
      </main>
    </>
  );
};

export default Events;
