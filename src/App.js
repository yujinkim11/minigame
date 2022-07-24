import { Box } from "./Box";
import "./App.css";
import { Button } from "./Button";

function App() {
  return (
    <>
      <div className="mainbox">
        <Box user="You" item={select} />
        <Box user="Computer" />
      </div>
      <div className="mainbox">
        <Button />
      </div>
    </>
  );
}

export default App;
