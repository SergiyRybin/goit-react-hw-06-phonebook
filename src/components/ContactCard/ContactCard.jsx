import React from 'react';
import PropTypes from 'prop-types';
import { removeContact } from 'redux/slice';
import { useDispatch } from 'react-redux';

const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();
  const remove = () => dispatch(removeContact(contact.name));

  return (
    <li>
      {contact.name}: {contact.number}
      <button type="submite" className="delete" onClick={remove}>
        Delete
      </button>
    </li>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactCard;
