import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from "./App";
import FirstPage from "./FirstPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" exact component={FirstPage} />
      <Route path="/game" exact component={App} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
