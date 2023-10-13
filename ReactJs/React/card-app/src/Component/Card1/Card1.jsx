import React from "react";
import "./Card1.css";
function Card1(props) {
  return (
    <>
      <div className="card1-wrapper">
        <h3 htmlFor="">UserName</h3>
        <h4 id="userName">{props.data.userName}</h4>
        <h4>DOB</h4>
        <h4 id="Dob">{props.data.DOB}</h4>
      </div>
    </>
  );
}

export default Card1;
