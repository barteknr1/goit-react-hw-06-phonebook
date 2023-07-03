import { getContacts, getFilter } from "redux/selectors"
import { useSelector } from "react-redux"

const ContactsBar = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    const isAnyContactSaved = contacts.length > 0;
    return (
        <>
            {isAnyContactSaved && filter &&
                <div>
                    <h3>Found {filteredContacts.length} of {contacts.length} contacts</h3>
                    <progress value={filteredContacts.length} max={contacts.length} />
                </div>}
        </>
    )
}

export default ContactsBar