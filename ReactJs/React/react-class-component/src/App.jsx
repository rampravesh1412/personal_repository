// eslint-disable-next-line no-unused-vars
import React from "react";
import First from "./Component/First/First";
import Second from "./Component/Second/Second";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Rampravesh kumar yadav",
      rollNum: 81,
      surName: "Yadav",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.rollNum}</h2>
        <First />
        {/* <Second /> */}
      </div>
    );
  }
}

export default App;
