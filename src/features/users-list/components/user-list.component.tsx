import React, { useState, useEffect } from "react";
import axios from "axios";
import userModel from '../../../models/user-model';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      console.log(data);
      setUsers(data);
    });
  });

  return (
    <div>
      {users.map((user: userModel, index) => (
        <li key={index}><p>{user.id} - {user.name}</p>
        </li>
      ))}
    </div>
  );
};

export default UserList;
