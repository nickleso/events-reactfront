// import { useDispatch, useSelector } from "react-redux";
// import { getContacts } from "../redux/contacts/selectors";
// import { addContact } from "../redux/contacts/operations";

export const UserCreateForm = () => {
  //   const dispatch = useDispatch();
  //   const contactList = useSelector(getContacts);

  function onFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const normalizedName = name.toLowerCase();
    const number = form.elements.number.value;

    const checkByName = contactList.find(
      (contact) => contact.name.toLowerCase() === normalizedName
    );

    if (checkByName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      name,
      number,
    };

    // dispatch(addContact(newContact));
    form.reset();
  }

  return (
    <div className="contacts">
      <h2 className="contacts__title">Add new contacts</h2>
      <form className="contacts__form" onSubmit={onFormSubmit}>
        <label className="contacts__label">
          Name
          <input
            className="contacts__input"
            type="text"
            name="name"
            placeholder="Name"
            pattern="[a-zA-Z][a-zA-Z0-9-_.\s]{1,17}"
            title="Only letters (either case), numbers, hyphens, underscores, and periods. The username must start with a letter and must be between 1 and 17 characters long."
            required
          />
        </label>
        <label className="contacts__label">
          Phone
          <input
            className="contacts__input"
            type="tel"
            name="number"
            placeholder="Phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className="contacts__button" type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
