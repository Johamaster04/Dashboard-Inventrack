"use client"
import PropTypes from 'prop-types';
import styles from "./search.module.css"
import { MdSearch } from "react-icons/md"

const Search = ({ placeholder }) => {
    return (
        <div className={styles.container}>
            <MdSearch />
            <input 
                type="text" 
                placeholder={placeholder} 
                className={styles.input} 
            />
        </div>
    );
}

Search.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

export default Search;
