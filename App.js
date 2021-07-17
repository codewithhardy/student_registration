import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StudentList from "./StudentList";
import Register from "./Register";
import NavBar from "./NavBar";
import "./app.css";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" exact />
              <Route path="/StudentList" component={StudentList} />
              <Route path="/Register" component={Register} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
