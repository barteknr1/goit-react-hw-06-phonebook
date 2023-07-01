import css from './ContactList.module.css'
import PropTypes from 'prop-types'

const ContactListElement = ({name, number, id, onClick}) => {
  return (
    <div className={css.contactElement}>{name}: {number}
      <button className={css.delete} onClick={() => onClick(id)} id={id} type='button'>Delete</button>
    </div>
  )
}

ContactListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ContactListElement