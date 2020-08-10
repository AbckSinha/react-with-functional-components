import React, { useState, useEffect } from "react";
import axios from "axios";
import userModel from "../../../../models/user-model";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UserDetailsContainer from "../../../user-details/containers/user-details.container";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      console.log(data);
      setUsers(data);
    });
  }, []);

  const goto = (user: userModel) => {
    return (
      <Router>
        <Route path="/user-details" component={UserDetailsContainer} />{" "}
      </Router>
    );
  };

  return (
    <div className="container">
      {users.map((user: userModel, index) => (
        <p key={index}>
          <a onClick={() => goto(user)} className="userList">
            {user.id} - {user.name}
          </a>
        </p>
      ))}
    </div>
  );
};

export default UserList;
