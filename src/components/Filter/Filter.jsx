import PropTypes from 'prop-types';
import React from 'react';

const Filter = ({ onFilter }) => (
  <label>
    Find contacts by name
    <input type="text" name="filter" onChange={onFilter} />
  </label>
);

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;

