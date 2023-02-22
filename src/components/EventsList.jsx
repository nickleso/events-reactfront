export const EventsList = ({ events }) => {
  console.log(events);
  return (
    <section>
      {events.length > 0 && (
        <ul>
          {events.map(({ _id, title, description, startDate, endDate }) => (
            <li key={_id}>
              <p>Title: {title}</p>
              <p>Description: {description}</p>
              <p>Start date: {startDate}</p>
              <p>End date: {endDate}</p>
              <p>Next event: </p>
            </li>
          ))}
        </ul>
      )}
      {events.length === 0 && <h3>No events for this user</h3>}
    </section>
  );
};
