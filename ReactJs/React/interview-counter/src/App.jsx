import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let count = 0;
  const [count, changeValue] = useState(0);

  const addFun = () => {
    

    changeValue((prevValue) => prevValue + 1);
    changeValue((prevValue) => prevValue + 1);
    changeValue((prevValue) => prevValue + 1);
  };

  const removeFun = () => {
    changeValue(count - 1);
  };
  return (
    <>
      <h1>ADD {count}</h1>
      <button onClick={addFun}>Click Me</button>
      <h1>REMOVE {count}</h1>
      <button onClick={removeFun}>Click Me</button>
    </>
  );
}

export default App;
