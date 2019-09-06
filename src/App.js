import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { HashRouter } from "react-router-dom";
import routes from "../src/routes";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
