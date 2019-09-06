import React, { Component } from "react";

class Wizard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backToDashboard: false,
      image_url: "",
      property_name: "",
      property_address: "",
      city: "",
      state: "",
      zip_code: ""
    };
  }
  setBackToDashboard = () => {
    this.setState({
      backToDashboard: true
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.setBackToDashboard}>'Cancel</button>
      </div>
    );
  }
}

export default Wizard;
