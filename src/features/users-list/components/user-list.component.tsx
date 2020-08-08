import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  interface userModel {
    name: string;
  }
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      console.log(data);
      setUsers(data);
    });
  });

  return (
    <div>
      {users.map((user: userModel, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </div>
  );
};

export default UserList;
