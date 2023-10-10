import "./App.css";
import First from "./Component/First/First";
import Second from "./Component/Second/Second";
import { Third } from "./Component/Third/Third";
function App() {
  return (
    <>
      <First attributes={1}>
        <h1>My bada child hu</h1>
      </First>
      <First attributes={2} />
      <First attributes={3} />
      <Second />
      <Third />
    </>
  );
}

export default App;
