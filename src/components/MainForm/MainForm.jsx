import ContactForm from '../ContactForm/ContactForm ';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const MainForm = () => {
  return (
    <div className="phoneBook">
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </div>
  );
};

export default MainForm;
