import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const increament = () => {
    setCounter(counter + 1);
  };

  const Decerement = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    console.log("Hello baby boy");
  }, [counter, setCounter]);

  return (
    <>
      {/* <h2>Increament value : {counter}</h2> */}
      <button onClick={increament}>Click ME: {counter}</button>
      <h2>Decerement value : {counter}</h2>
      <button onClick={Decerement}>Click ME: {setCounter}</button>
    </>
  );
}

export default App;
