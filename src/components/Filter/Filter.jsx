import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

function Filter({ value, onFilter }) {
  return (
    <div className={css.container}>
      <p className={css.call}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onFilter}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
