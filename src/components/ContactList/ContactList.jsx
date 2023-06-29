import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, removeContact }) => (
  <ul className={css.list}>
    {contacts.map(contact => (
      <li className={css.item} key={contact.id}>
        {contact.name + ': ' + contact.number}
        {
          <button
            className={css.button}
            type="button"
            name="delete"
            onClick={() => removeContact(contact.id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactList;
