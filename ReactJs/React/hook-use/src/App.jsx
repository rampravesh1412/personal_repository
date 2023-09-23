import { useState } from "react";
import HookFun from "../hookuse/hookuse";

import "./App.css";

function App() {
  return (
    <>
      <HookFun
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE990X_tlf0bkKXLn0-Ex8CEe4olB1VmTRtQ&usqp=CAU"
        height="50px"
        weight="50px"
      />
      <HookFun
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdh4NrrpSubhU81tD872tL_xQ8TEGtYCN3cg&usqp=CAU"
        height="50px"
        weight="50px"
      />
    </>
  );
}
export default App;
