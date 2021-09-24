import React from "react";
const Border = ({ children }) => {
  return (
    <div style={{ border: "2px solid Black", margin: "5px" }}>{children}</div>
  );
};
export default Border;