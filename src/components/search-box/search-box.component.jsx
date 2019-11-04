import React from "react";
import "./search-box.styles.css";

// functional components don't have access to local state
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
); 
