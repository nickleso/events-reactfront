export const EventCreateForm = ({ onSubmit, onClose }) => {
  function onFormSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const title = form.elements.title.value;
    const description = form.elements.description.value;
    const startDate = form.elements.startDate.value;
    const endDate = form.elements.endDate.value;

    const newEvent = {
      title,
      description,
      startDate,
      endDate,
    };
    onSubmit(newEvent);
    form.reset();
    onClose();
  }

  return (
    <div className="form-wrap">
      <h2 className="form-title">Create event form</h2>
      <form className="form" onSubmit={onFormSubmit}>
        <label className="form-label">
          Title
          <input
            className="form-input"
            type="text"
            name="title"
            placeholder="Title"
            pattern="[a-zA-Z][a-zA-Z0-9-_.\s]{1,17}"
            title="Only letters (either case), numbers, hyphens, underscores, and periods. The username must start with a letter and must be between 1 and 17 characters long."
            required
          />
        </label>
        <label className="form-label">
          Description
          <input
            className="form-input"
            type="text"
            name="description"
            placeholder="Description"
            pattern="[a-zA-Z][a-zA-Z0-9-_.\s]{1,17}"
            title="Only letters (either case), numbers, hyphens, underscores, and periods. The username must start with a letter and must be between 1 and 17 characters long."
            required
          />
        </label>
        <label className="form-label">
          Start date
          <input
            className="form-input"
            type="date"
            name="startDate"
            placeholder="Start date"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Start date must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <label className="form-label">
          End date
          <input
            className="form-input"
            type="date"
            name="endDate"
            placeholder="End date"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="End date must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className="button" type="submit">
          Add event
        </button>
      </form>
    </div>
  );
};
