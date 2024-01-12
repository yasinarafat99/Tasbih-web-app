import { useState } from "react";
import "./Tasbih.css"; // Import the CSS file

function Tasbih() {
  const [count, setCount] = useState(0);
  const [countRes, setCountRes] = useState(0);

  const subHanallah = () => {
    setCount((count) => count + 1);
    setCountRes((countRes) => countRes + 1);

    if (countRes >= 33) {
      setCount(0);
    }
  };

  const alhamdulliah = () => {
    if (countRes === 33) {
      setCount(0);
    }
    if (countRes > 32) {
      setCountRes((countRes) => countRes + 1);
      setCount((count) => count + 1);
    } else {
      alert("Type Is wrong");
    }

    if (countRes >= 66) {
      setCount(0);
    }
  };

  const AllahuAkbar = () => {
    if (countRes === 66) {
      setCount(0);
    }
    if (countRes > 65) {
      setCountRes((countRes) => countRes + 1);
      setCount((count) => count + 1);
    } else {
      alert("Type Is wrong");
    }
    if (countRes >= 100) {
      setCount(0);
    }
  };

  const Reset = () => {
    setCount(0);
    setCountRes(0);
  };

  return (
    <div className="container">
      <div className="counter">
        <h1>Tasbih: {count}</h1>
      </div>

      <div className="buttonContainer">
        {countRes <= 32 ? (
          <div>
            <button className="button" onClick={subHanallah}>
              Subhanallah
            </button>
          </div>
        ) : (
          <div>
            <button className="disabledButton" disabled={countRes >= 33}>
              Red Alhamdulliah
            </button>
          </div>
        )}

        {countRes <= 65 ? (
          <div>
            <button className="button" onClick={alhamdulliah}>
              Alhamdulillah
            </button>
          </div>
        ) : (
          <div>
            <button className="disabledButton" disabled={countRes >= 66}>
              Red AllahuAkbar
            </button>
          </div>
        )}

        <div>
          <button
            className="button"
            disabled={countRes >= 100}
            onClick={AllahuAkbar}
          >
            AllahuAkbar
          </button>
        </div>

        {countRes >= 100 && <div className="completedMessage">Your Task Completed</div>}
        {countRes >= 100 && (
          <div className="resetButton" onClick={Reset}>
            Reset
          </div>
        )}
      </div>
    </div>
  );
}

export default Tasbih;
