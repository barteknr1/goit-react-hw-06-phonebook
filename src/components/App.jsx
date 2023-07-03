import React from 'react'
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactsBar from './ContactsBar/ContactsBar'
import ContactList from './ContactList/ContactList'

const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsBar />
      <ContactList />
    </>
  )
};

export default App