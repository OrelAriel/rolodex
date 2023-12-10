import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChangleHandler }) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangleHandler}
  />
);

export default SearchBox;
