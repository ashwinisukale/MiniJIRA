import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import ProjectList from "../projects/components/ProjectList";
import ProjectDetails from "../projects/components/ProjectDetails";
import TodosPage from "../todos/components/TodosPage";
import ViewDashboard from '../dashboard/components/ViewDashboard';
import SignUp from '../users/components/SignUp';
// import PrivateRoute from "./PrivateRoute";

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <div>
          <span>
            <Link to="/login">Login</Link>
          </span>
          {' || '}
          <span>
            <Link to="/projects">Projects</Link>
          </span>
          {' || '}
          <span>
            <Link to="/todos">Todos</Link>
          </span>
          {' || '}
          <span>
            <Link to="/dashboard">Dashboard</Link>
          </span>
          {' || '}
          <span>
            <Link to="/users">Manage Users</Link>
          </span>
          </div>
      </nav>
      <Route path="/login" component={LoginPage} />
      <Route path="/projects" component={ProjectList} exact />
      <Route path="/todos" component={TodosPage} exact />
      <Route path="/projects/:id" component={ProjectDetails} exact />
      <Route path="/dashboard" component={ViewDashboard} exact />
      <Route path="/users" component={SignUp} exact />
    </div>
  </Router>
);

export default AppRouter;