import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UserContainer from "../src/features/users-list/containers/user-list.container";
import "./App.css";

interface model {
  value: string;
}

const App = () => {
  const message = "Abhishek";
  return (
    <div>
      <Router>
        <Link to="/users">Users</Link>
        <Link to="/user-details">User Details</Link>
        <br />
        <br />
        <Switch>
          <Route exact path="/" component={UserContainer} />
          <Route exact path="/users" component={UserContainer} />
          <Route exact path="/user-details" component={UserContainer} />
        </Switch>
      </Router>
    </div>
  );
};

const Headline = ({ value }: model) => {
  const greeting = "Hello Function Component!" + value;
  return <h1>{greeting}</h1>;
};

export default App;
