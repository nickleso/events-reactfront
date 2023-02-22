// import { ContactForm } from '../components/ContactForm';
// import { ContactList } from '../components/ContactList';
// import { Filter } from '../components/Filter';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchEventsByUserId } from "../services/fetchFilms";

import { EventsList } from "../components/EventsList";
import { ButtonCreate } from "../components/ButtonCreate";
import { Loader } from "../components/Loader";
import { Modal } from "../components/Modal";

const Events = () => {
  const [events, setEvents] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function searchEventsByUserId() {
      try {
        setLoading(true);
        const results = await fetchEventsByUserId(id);
        setEvents(results.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    searchEventsByUserId();
  }, [id]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <main>
        <section className="section">
          <div className="container">
            <h1 className="hidden">Events</h1>

            <ButtonCreate showModal={toggleModal} buttonName={"Create event"} />

            {loading ? <Loader /> : <EventsList events={events} />}
          </div>

          {showModal && (
            <Modal onClose={toggleModal}>
              <h2>Create event form</h2>
            </Modal>
          )}
        </section>
      </main>
    </>
  );
};

export default Events;
