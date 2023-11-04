import { useEffect, useState } from "react";

const App = () => {
  const [sizeScr, setSizeScr] = useState(sizeFun());
  function sizeFun() {
    return {
      height: window.innerHeight,
      width: window.innerWidth,
    };
  }
  useEffect(() => {
    const updateDimension = () => {
      setSizeScr(sizeFun());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [sizeScr]);
  return (
    <div>
      <h3>
        This screen highet: {sizeScr.height} and width: {sizeScr.width}
      </h3>
    </div>
  );
};

export default App;
