import React from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const ContactForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        dispatch(addContact(name, number));
        form.reset();
    };

    return (
        <form
            className={css.contactForm}
            onSubmit={handleSubmit}>
            <label>
                <p className={css.inputName}>Name</p>
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label>
                <p className={css.inputName}>Number</p>
                <input
                    className={css.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button
                className={css.add}
                type="submit">Add contact</button>
        </form>
    )
}

export default ContactForm