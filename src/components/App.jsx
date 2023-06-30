import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

// const phoneContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const contactsList = localStorage.getItem('contacts');
    const parsedContactList = JSON.parse(contactsList);
    if (parsedContactList) {
      setContacts(parsedContactList);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts, isMounted]);

  const addContact = contact => {
    const isInContacts = contacts.some(
      ({ name }) => name && name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    setContacts(prevContacts => [
      { id: nanoid(), ...contact },
      ...prevContacts,
    ]);
  };

  const removeContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(({ id }) => id !== contactId);
    });
    console.log('removin');
  };

  const filterContact = e => {
    setFilter(e.target.value);
  };

  const showContacts = () => {
    const unitedContact = filter.toLowerCase();
    return contacts.filter(
      contact =>
        contact &&
        contact.name &&
        contact.name.toLowerCase().includes(unitedContact)
    );
  };

  const searchedContacts = showContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact}></ContactForm>
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter value={filter} onFilter={filterContact}></Filter>
      ) : (
        <div>Your phonebook is empty. Add first contact!</div>
      )}
      <ContactList
        contacts={searchedContacts}
        removeContact={removeContact}
      ></ContactList>
    </div>
  );
};

export default App;
