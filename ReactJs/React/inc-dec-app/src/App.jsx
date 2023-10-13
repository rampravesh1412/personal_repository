import { useState } from "react";
import "./App.css";
function App() {
  const [data, setData] = useState(0);
  return (
    <div className="App-wrapper">
      <div>
        <h3>Increament & Decerement</h3>
        <div className="data-handler">
          <button
            onClick={() => {
              setData(data - 1);
            }}
            className="data-btn"
          >
            -
          </button>
          <span>{data}</span>
          <button
            onClick={() => {
              setData(data + 1);
            }}
            className="data-btn"
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setData(0);
            }}
            className="Reset-wrapper"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
