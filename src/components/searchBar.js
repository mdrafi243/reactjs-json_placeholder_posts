import React from "react";
import TextField from "material-ui/TextField";

const SearchBar = ({ searchText, onSearch }) => {
  //   onChange = e => {
  //     console.log(e.target.value);
  //     onSearch(e.target.value);
  //   };
  return (
    <div className="field-line">
      <TextField
        floatingLabelText={"Search text here"}
        name="searchText"
        onChange={onSearch}
        value={searchText}
      />
    </div>
  );
};

export default SearchBar;
