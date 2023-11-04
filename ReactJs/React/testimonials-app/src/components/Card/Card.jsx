import { useState } from "react";
import Profileimg from "../Profileimg/Profileimg";
import "./Card.css";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
const Card = (prop) => {
  const [dataval, setDataval] = useState(0);
  function leftBtnHandler() {
    if (dataval - 1 < 0) {
      setDataval(prop.datas.length - 1);
    } else {
      setDataval(dataval - 1);
    }
  }
  function rightBtnHandler() {
    if (dataval + 1 >= prop.datas.length) {
      setDataval(0);
    } else {
      setDataval(dataval + 1);
    }
  }

  function supriseHandler() {
    let randomNum = Math.floor(Math.random() * 10);
    setDataval(randomNum);
  }
  //   let objData = prop.datas[0];
  return (
    <div>
      <div>
        <Profileimg imageUrl={prop.datas[dataval].image} />
        {/* {console.log(prop.datas[0].image)} */}
      </div>
      <div className="name-job-wrapper">
        <p>{prop.datas[dataval].name}</p>
        <p>{prop.datas[dataval].job}</p>
      </div>
      <div className="btn-wrapper">
        <div>
          <p className="faquote">
            <FaQuoteLeft />
          </p>
          <div className="discription">
            <p>{prop.datas[dataval].discription}</p>
          </div>
          <p className="faquote">
            <FaQuoteRight />
          </p>
        </div>
        <div className="faangle-btn">
          <button onClick={leftBtnHandler}>
            <FaAngleLeft />
          </button>
          <button onClick={rightBtnHandler}>
            <FaAngleRight />
          </button>
        </div>
        <div className="suprise-btn">
          <button onClick={supriseHandler}>Suprise Me</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
