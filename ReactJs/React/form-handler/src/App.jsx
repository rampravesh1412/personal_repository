import React, { useState } from "react";

const App = () => {
  const [datas, setDatas] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    frontend: "",
  });

  console.log(datas);

  function inputHandler(e) {
    // console.log(e.target.value);
    setDatas((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  }
  return (
    <div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          onChange={inputHandler}
          type="text"
          name="firstName"
          id="firstName"
          value={datas.firstName}
        />
      </div>
      <div>
        <label htmlFor="lastName">last Name</label>
        <input
          onChange={inputHandler}
          type="text"
          name="lastName"
          id="lastName"
          value={datas.lastName}
        />
      </div>
      <div>
        <label htmlFor="email">Email Id</label>
        <input
          onChange={inputHandler}
          type="text"
          name="email"
          id="email"
          value={datas.email}
        />
      </div>
      <div>
        <label htmlFor="country">Select your Country</label>
        <select
          onChange={inputHandler}
          name="country"
          id="country"
          value={datas.country}
        >
          <option value="India">India</option>
          <option value="Nepal">Nepal</option>
          <option value="Chaina">Chaina</option>
          <option value="Austrilia">Austrilia</option>
        </select>
      </div>
      <div>
        <label htmlFor="jsLanguage">
          Js is which type of programming language
        </label>
        <br />
        <label htmlFor="frontend">frontend</label>
        <input
          onChange={inputHandler}
          type="radio"
          checked="frontend"
          name="frontend"
          id="frontend"
          value={datas.frontend}
        />
        <label htmlFor="backend">backend</label>
        <input
          onChange={inputHandler}
          type="radio"
          checked="frontend"
          name="frontend"
          id="backend"
          value={datas.frontend}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default App;
