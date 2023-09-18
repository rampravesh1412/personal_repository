import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "../stockCard/Card";

function App() {
  return (
    <>
      <Card Title="ramp" />
      <Card Title="swag" />
    </>
  );
}

export default App;
