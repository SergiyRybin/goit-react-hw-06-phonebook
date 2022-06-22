import ContactForm from '../ContactForm/ContactForm ';
import { useState, useEffect } from 'react';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const MainForm = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFiltr] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const fromStateData = data => {
    const { name, id, number } = data;
    setContacts(prev => {
      if (prev.find(el => el.name.toLowerCase() === name.toLowerCase())) {
        alert(`${name} is already in contacts`);
        return prev;
      }
      return [...prev, { name, id, number }];
    });
  };

  const handleFilter = e => {
    const { name, value } = e.currentTarget;
    console.log(name, value);
    setFiltr(value);
  };

  const filterBook = contacts.filter(({ name }) =>
    name.toLowerCase().startsWith(filter.toLowerCase())
  );

  const contactRemove = e => {
    const delValue = e.currentTarget.parentNode.firstChild.data;
    setContacts(contacts.filter(el => el.name !== delValue));
  };

  return (
    <div className="phoneBook">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={fromStateData} />

      <h1>Contacts</h1>
      <Filter onFilter={handleFilter} />
      <ContactList filterBook={filterBook} onRemove={contactRemove} />
    </div>
  );
};

export default MainForm;
