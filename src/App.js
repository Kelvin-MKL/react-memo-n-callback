import "./App.css";
import { useState, memo, useMemo, useCallback } from "react";

const Square = ({ color, onClick }) => {
  console.log("Square func is called.");
  return useMemo(
    () => (
      <>
        {console.log(`Color is changed to ${color}`)}
        <div
          style={{ height: "50px", width: "50px", background: color }}
          onClick={onClick}
        ></div>
      </>
    ),
    [color]
  );
};

const SquareMemoed = memo(Square);

function App() {
  const [renderCounter, setRenderCounter] = useState(0);
  const [color, setColor] = useState("blue");

  const renderMessage = `The entire app is rendered ${renderCounter} times.`;
  console.log(renderMessage);

  const handleClick = useCallback(() => {
    console.log("Square is clicked.");
  }, []);

  return (
    <div className='App'>
      <div>
        <button
          style={{ height: "auto", width: "200px" }}
          onClick={() => setRenderCounter(renderCounter + 1)}
        >
          Render App
        </button>
        <h4>{renderMessage}</h4>
      </div>
      <div>
        <SquareMemoed color={color} onClick={handleClick}></SquareMemoed>
        <button
          style={{ marginTop: "30px" }}
          onClick={() => setColor(color === "blue" ? "red" : "blue")}
        >
          Change Color
        </button>
        <div></div>
      </div>
    </div>
  );
}

export default App;
