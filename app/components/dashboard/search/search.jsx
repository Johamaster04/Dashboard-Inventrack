"use client"
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css"

const SearchBar = ({ placeholder, onSearch }) => {
  const handleSearch = (e) => {
    const query = e.target.value;
    onSearch(query);
  }

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
