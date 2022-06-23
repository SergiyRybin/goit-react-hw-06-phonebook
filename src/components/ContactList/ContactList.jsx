import React from 'react';
import ContactCard from 'components/ContactCard/ContactCard';
import { useSelector } from 'react-redux';

function ContactList() {
  const state = useSelector(state => state.myValue);
  const filter = useSelector(state => state.filter);

  const filterBook = state.filter(({ name }) =>
    name.toLowerCase().startsWith(filter.toLowerCase())
  );

  return (
    <ul>
      {filterBook.map((contact, index) => (
        <ContactCard contact={contact} key={index} />
      ))}
    </ul>
  );
}

export default ContactList;
