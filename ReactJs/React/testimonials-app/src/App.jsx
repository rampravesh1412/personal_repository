import Heading from "./components/Heading/Heading";
import data from "./data";
import Card from "./components/Card/Card";
import "./App.css";

const App = () => {
  console.log(data);
  return (
    <div className="app-parent">
      <div className="app-wrapper">
        <div className="heading">
          <Heading />
          <Card datas={data} />
        </div>
      </div>
    </div>
  );
};

export default App;
