import React from 'react';
import PropTypes from 'prop-types';

const ContactCard = ({ onRemove, con, index }) => (
  <li key={index}>
    {con.name}: {con.number}
    <button type="submite" className="delete" onClick={onRemove}>
      Delete
    </button>
  </li>
);

ContactCard.propTypes = {
  onRemove: PropTypes.func.isRequired,
  con: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default ContactCard;
