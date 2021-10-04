import React, { useContext } from "react";
import { userContext } from "../userContext";
import RenderUsers from "./RenderUsers";

const SearchForm = () => {
  const value = useContext(userContext);
  return (
    <div>
      <input
        type="text"
        value={value.input}
        onChange={(e) => {
          value.setInput(e.target.value);
        }}
      />
      <RenderUsers />
    </div>
  );
};

export default SearchForm;
