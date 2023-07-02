import React, { useEffect } from 'react'
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'

const App = () => {

  // useEffect(() => {
  //   const savedContacts = localStorage.getItem('contacts');
  //   if (savedContacts === null) {
  //     return
  //   };
  //   const parsedContacts = JSON.parse(savedContacts);
  //   setContacts(parsedContacts);
  // }, [])

  // useEffect(() => {
  //   if (contacts.length > 0) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts))
  //   }
  //   else if (contacts.length === 0) {
  //     localStorage.clear();
  //   }
  // }, [contacts])


  // const filteredContacts = () => {
  //   if (filter === '') {
  //     return contacts;
  //   }
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  // }

  // const isAnyContactSaved = contacts.length > 0
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm
        // onSubmit={handleSubmit}
      />
      <h2>Contacts</h2>
      <Filter />
      {/* {isAnyContactSaved && filter && (
        <div>
          <h3>Found {filteredContacts().length} of {contacts.length} contacts</h3>
          <progress value={filteredContacts().length} max={contacts.length} />
        </div>
      )} */}
      <ContactList
        // contacts={filteredContacts()}
      />
    </>
  )
}

export default App