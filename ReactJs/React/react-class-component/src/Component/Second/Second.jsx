import React from "react";

class Second extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Second",
    };

    this.setState = {
      name: "second Rampravesh",
    };
  }
  render() {
    return (
      <>
        <h1>This is {this.state.name} h1</h1>
        <h2>This is {this.state.name} h2</h2>
      </>
    );
  }
}

export default Second;
