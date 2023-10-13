/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Card1 from "./Component/Card1/Card1";

function App() {
  const obj = [
    {
      userName: "Rampravesh",
      DOB: "15/11/2003",
    },
    {
      userName: "Rajan",
      DOB: "17/11/2001",
    },
    {
      userName: "Rajesh",
      DOB: "15/9/2001",
    },
    {
      userName: "Saroj",
      DOB: "10/11/2002",
    },
  ];
  return (
    <div className="Card1-Wrapper">
      <Card1 data={obj[0]} />
      <Card1 data={obj[1]} />
      <Card1 data={obj[2]} />
      <Card1 data={obj[3]} />
    </div>
  );
}

export default App;
