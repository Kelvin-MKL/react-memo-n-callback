import "./App.css";
import { useState, useMemo } from "react";

function Square({ color }) {
  console.log("Square func is called.");
  return (
    <div style={{ height: "50px", width: "50px", background: color }}></div>
  );
}

function App() {
  const [renderCounter, setRenderCounter] = useState(0);
  const [color, setColor] = useState("blue");

  const squareMemo = useMemo(() => {
    console.log("SquareMemo is called.");
    return <Square color={color}></Square>;
  }, [color]);

  const renderMessage = `The entire app is rendered ${renderCounter} times.`;
  console.log(renderMessage);

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
        {squareMemo}
        <button
          style={{ marginTop: "30px" }}
          onClick={() => setColor(color === "blue" ? "red" : "blue")}
        >
          Change Color
        </button>
      </div>
    </div>
  );
}

export default App;
