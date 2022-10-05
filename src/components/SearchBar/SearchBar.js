import React from "react";
import Styles from "./SearchBar.module.css";

const SearchBar = ({ searchFilter }) => {
  return (
    <form className={Styles.form}>
      <input
        type="text"
        placeholder="Search By Name "
        onChange={(e) => searchFilter(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
