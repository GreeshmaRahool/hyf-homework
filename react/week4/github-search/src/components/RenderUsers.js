import React, { useContext } from "react";
import { userContext } from "../userContext";

const RenderUsers = () => {
  const value = useContext(userContext);
  const users = value.users;
  return (
    <div>
      {value.loading && <p>Loading...</p>}
      {users.length === 0 ? (
        <p>No results found</p>
      ) : (
        <ul>
          {users.map((user) => {
            return <li key={user.id}>{user.login}</li>;
          })}
        </ul>
      )}
      {value.error && <p>Something went wrong!</p>}
    </div>
  );
};
export default RenderUsers;
