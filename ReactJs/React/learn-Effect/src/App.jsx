import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effected");
  }, []);

  return (
    <>
      <h3>Value is: {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Incr Button
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decr Button
      </button>
    </>
  );
}

export default App;
