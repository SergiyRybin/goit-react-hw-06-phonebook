import React from 'react';
import ContactCard from 'components/ContactCard/ContactCard';
import { useSelector } from 'react-redux';
import { contactValue, filterValue } from 'redux/slice';

function ContactList() {
  const filterBook = useSelector(contactValue);
  const filterData = useSelector(filterValue);

  const data = filterBook.filter(({ name }) =>
    name.toLowerCase().startsWith(filterData.toLowerCase())
  );

  return (
    <ul>
      {data.map((contact, index) => (
        <ContactCard contact={contact} key={index} />
      ))}
    </ul>
  );
}

export default ContactList;
