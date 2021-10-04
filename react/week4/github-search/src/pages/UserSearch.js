import React, { useEffect, useState } from "react";
import api from "../helper";
import SearchForm from "../components/SearchForm";
import { UserProvider } from "../userContext";
import Header from "../components/Header";

function UserSearch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [input, setInput] = useState("");

  useEffect(
    (user) => {
      if (input !== "") {
        setLoading(true);
        api(input)
          .then((data) => {
            setUsers(data.items);
            setLoading(false);
          })
          .catch(() => {
            setError(true);
            setLoading(false);
          });
      }
    },
    [input]
  );

  const contextValues = {
    loading,
    error,
    input,
    setInput,
    users,
  };
  return (
    <UserProvider value={contextValues}>
      <Header />
      <SearchForm />
    </UserProvider>
  );
}

export default UserSearch;
