import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("yellow");

  // const blackFun = () => {
  //   setColor("black");
  // };

  // const greenFun = () => {
  //   setColor("green");
  // };

  // const redFun = () => {
  //   setColor("red");
  // };

  // const blueFun = () => {
  //   setColor("blue");
  // };

  // const aquaFun = () => {
  //   setColor("aqua");
  // };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div>
        <button
          onClick={() => {
            setColor("black");
          }}
        >
          Black!
        </button>
        <button
          onClick={() => {
            setColor("green");
          }}
        >
          green!
        </button>
        <button
          onClick={() => {
            setColor("red");
          }}
        >
          red!
        </button>
        <button
          onClick={() => {
            setColor("blue");
          }}
        >
          Blue!
        </button>
        <button
          onClick={() => {
            setColor("aqua");
          }}
        >
          aqua!
        </button>
      </div>
    </div>
  );
}

export default App;
