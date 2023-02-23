export const UserCreateForm = ({ onSubmit, onClose }) => {
  function onFormSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const firstName = form.elements.firstName.value;
    const lastName = form.elements.lastName.value;
    const email = form.elements.email.value;
    const phoneNumber = form.elements.phoneNumber.value;

    const newUser = {
      firstName,
      lastName,
      email,
      phoneNumber,
    };
    onSubmit(newUser);
    form.reset();
    onClose();
  }

  return (
    <div className="form-wrap">
      <h2 className="form-title">Create user form</h2>
      <form className="form" onSubmit={onFormSubmit}>
        <label className="form-label">
          First name
          <input
            className="form-input"
            type="text"
            name="firstName"
            placeholder="First name"
            pattern="[a-zA-Z][a-zA-Z0-9-_.\s]{1,17}"
            title="Only letters (either case), numbers, hyphens, underscores, and periods. The username must start with a letter and must be between 1 and 17 characters long."
            required
          />
        </label>
        <label className="form-label">
          Last name
          <input
            className="form-input"
            type="text"
            name="lastName"
            placeholder="Last name"
            pattern="[a-zA-Z][a-zA-Z0-9-_.\s]{1,17}"
            title="Only letters (either case), numbers, hyphens, underscores, and periods. The username must start with a letter and must be between 1 and 17 characters long."
            required
          />
        </label>
        <label className="form-label">
          Email
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="example: characters@characters.domain"
            required
          />
        </label>
        <label className="form-label">
          Phone number
          <input
            className="form-input"
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className="button" type="submit">
          Add user
        </button>
      </form>
    </div>
  );
};
