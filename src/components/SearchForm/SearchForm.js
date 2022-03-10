import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  return (
    <form className={s.SearchForm}>
      <button type="submit" className={s.SearchFormButton}>
        <span className={s.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={s.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  );
};

export default SearchForm;
