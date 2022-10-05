import React from "react";
import Styles from "./SearchNotFound.module.css";

const SearchNotFound = () => {
  return (
    <article className={Styles.search_Not_Found}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/6195/6195678.png"
        alt="No Result"
      />
      <h3>Sorry! No Result Found :( </h3>
      <h4>We're sorry what you were looking for. Please try another way</h4>
    </article>
  );
};

export default SearchNotFound;
