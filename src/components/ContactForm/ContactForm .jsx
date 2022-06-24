import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { contactValue, addContact } from 'redux/slice';

function ContactForm() {
  const nameAdd = useSelector(contactValue).map(el => el.name);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.currentTarget.elements;
    if (nameAdd.find(el => el.toLowerCase() === name.value.toLowerCase())) {
      e.currentTarget.reset();
      return alert(`${name.value} is already in contacts`);
    }
    dispatch(
      addContact({ name: name.value, number: number.value, id: nanoid(5) })
    );

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
