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
    <div className="contacts">
      <h2 className="contacts__title">Create user form</h2>
      <form className="contacts__form" onSubmit={onFormSubmit}>
        <label className="contacts__label">
          First name
          <input
            className="contacts__input"
            type="text"
            name="firstName"
            placeholder="First name"
            pattern="[a-zA-Z][a-zA-Z0-9-_.\s]{1,17}"
            title="Only letters (either case), numbers, hyphens, underscores, and periods. The username must start with a letter and must be between 1 and 17 characters long."
            required
          />
        </label>
        <label className="contacts__label">
          Last name
          <input
            className="contacts__input"
            type="text"
            name="lastName"
            placeholder="Last name"
            pattern="[a-zA-Z][a-zA-Z0-9-_.\s]{1,17}"
            title="Only letters (either case), numbers, hyphens, underscores, and periods. The username must start with a letter and must be between 1 and 17 characters long."
            required
          />
          <label className="contacts__label">
            Email
            <input
              className="contacts__input"
              type="email"
              name="email"
              placeholder="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="example: characters@characters.domain"
              required
            />
          </label>
        </label>
        <label className="contacts__label">
          Phone number
          <input
            className="contacts__input"
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className="contacts__button" type="submit">
          Add user
        </button>
      </form>
    </div>
  );
};
