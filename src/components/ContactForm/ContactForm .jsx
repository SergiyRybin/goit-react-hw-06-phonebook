import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

 function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setName(value);
      setId(nanoid(5));
    }
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    e.currentTarget.reset();

    onSubmit({ name, number, id });
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
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes ={
  onSubmit: PropTypes.func.isRequired
}

export default ContactForm