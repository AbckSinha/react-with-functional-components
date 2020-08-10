import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UserContainer from "../src/features/users-list/containers/user-list.container";
import UserDetailsContainer from "../src/features/user-details/containers/user-details.container";
import "./App.css";

interface model {
  value: string;
}

const App = () => {
  return (
    <div className="container">
      <Router>
        <Link to="/users">Users</Link>
        <Link to="/user-details" className="ml-3">
          User Details
        </Link>
        <br />
        <br />
        <Switch>
          <Route exact path="/" component={UserContainer} />
          <Route exact path="/users" component={UserContainer} />
          <Route exact path="/user-details" component={UserDetailsContainer} />
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
