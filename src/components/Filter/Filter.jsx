import css from './Filter.module.css';
import { setFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    console.log(e.target.value);
    dispatch(setFilter())
  };

  return (
    <label>
      <p className={css.inputName}>Find contacts by name</p>
      <input
        className={css.input}
        onChange={handleFilterChange}
        type="text"
        name="filter"
      />
    </label>
  )
}

export default Filter