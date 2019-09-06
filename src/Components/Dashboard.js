import React, { Component } from "react";
import House from "./House";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      house: []
    };
  }

  render() {
    return (
      <div>
        <House />
        <button>Add New Propery</button>
      </div>
    );
  }
}

export default Dashboard;
