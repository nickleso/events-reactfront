import { ButtonDeleteEvent } from "./ButtonDeleteEvent";

export const EventsList = ({ events, userId, deleteEventLocal }) => {
  return (
    <>
      {events.length > 0 && (
        <ul className="user-list">
          {events.map(({ _id, title, description, startDate, endDate }) => (
            <li className="events-item" key={_id}>
              <p>Title: {title}</p>
              <p>Description: {description}</p>
              <p>Start date: {startDate}</p>
              <p>End date: {endDate}</p>
              <p>Next event: </p>

              <ButtonDeleteEvent
                id={_id}
                userId={userId}
                onDeleteEventBtn={deleteEventLocal}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
