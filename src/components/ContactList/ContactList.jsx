import ContactListElement from './ContactListElement';
import css from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  return (
    <>
      {contacts.length > 0 ? (
        <ul>
          <ContactListElement />
        </ul>
      ) : (
        <p className={css.noContacts}>No saved contacts</p>
      )
      }
    </>
  )
}

export default ContactList