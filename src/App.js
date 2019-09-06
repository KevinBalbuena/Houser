import React from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import House from "./Components/House";
import Wizard from "./Components/Wizard";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <House />
      <Wizard />
      <Header />
    </div>
  );
}

export default App;
