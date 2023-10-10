import React from "react";

class First extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "first hu",
    };
  }

  rednder() {
    return (
      <>
        <h1>My hu na {this.state.name}</h1>
        <h2>yes bro tum ho na {this.state.name}</h2>
      </>
    );
  }
}

export default First;
