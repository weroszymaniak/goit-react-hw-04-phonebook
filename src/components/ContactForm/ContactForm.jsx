// import React, { Component } from 'react';
import { useState } from 'react';

// import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

// class ContactForm extends Component {
//   state = { ...INITIAL_STATE };

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // state = { ...INITIAL_STATE };
  // const [contactState, setContactState] = useState(INITIAL_STATE);

  // const nameId = nanoid();
  // const numberId = nanoid();

  //  handleChange = e => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };
  const handleChange = e => {
    const { name, value } = e.target;
    setName({ [name]: value });
    setNumber({ [number]: value });
  };
  //  handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.onSubmit({ name: this.state.name, number: this.state.number });
  //   this.reset();
  // };
  //  reset = () => {
  //   this.setState({ ...INITIAL_STATE });
  // };
  // const reset = () => {
  //   setContactState({ ...INITIAL_STATE });
  // };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  // render() {
  // const { name, number } = contactState;
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.button} type="submit">
        Add contact{' '}
      </button>
    </form>
  );
  // }
};

export default ContactForm;
