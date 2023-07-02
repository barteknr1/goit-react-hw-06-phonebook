import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Filter = ({ filter, onChange }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  
  return (
    <label>
      <p className={css.inputName}>Find contacts by name</p>
      <input
        className={css.input}
        onChange={onChange}
        type="text"
        name="filter"
        value={filter}
      />
    </label>
  )
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
}

export default Filter