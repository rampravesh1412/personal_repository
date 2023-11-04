import React from "react";

function Card({ imgData, priceData, placeData, discriptionData }) {
  return (
    <div>
      <div>
        <img width={50} src={imgData} alt="" />
      </div>
      <div>
        <h3> &#8377;{priceData}</h3>
      </div>
      <div>
        <h2>{placeData}</h2>
      </div>
      <div>
        <p>{discriptionData}</p>
      </div>
      <div>
        <button>Not Interested</button>
      </div>
    </div>
  );
}

export default Card;
