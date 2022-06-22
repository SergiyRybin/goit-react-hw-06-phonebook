import React from 'react';
import ContactCard from 'components/ContactCard/ContactCard';
import PropTypes from 'prop-types';

const ContactList = ({ filterBook, onRemove }) => (
  <ul>
    {filterBook.map((contact, index) => (
      <ContactCard
        con={contact}
        onRemove={onRemove}
        index={index}
        key={index}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  onRemove: PropTypes.func.isRequired,
  filterBook: PropTypes.array.isRequired,
};

export default ContactList;
