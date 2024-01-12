import { useState } from "react";
import "./tasbih.css";
function Tasbih() {
  const [count, setCount] = useState(0);
  const [countRes, setCountRes] = useState(100);

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
    <>
      <div className="container">
        <div className="total">Total: {countRes}</div>
        {/* <h1> </h1> */}
        <div className="counter">
          <h1>Tasbih: {count}</h1>
        </div>

        <div className="buttonContainer">
          {countRes <= 32 ? (
            <div className="button">
              <button onClick={subHanallah}>Subhanallah</button>
            </div>
          ) : (
            <div className="button">
              <button disabled={countRes >= 33}>Read Alhamdulillah</button>
            </div>
          )}

          {countRes <= 65 ? (
            <div className="button">
              <button onClick={alhamdulliah}>Alhamdulillah</button>
            </div>
          ) : (
            <div className="button">
              <button disabled={countRes >= 66}>Read AllahuAkbar</button>
            </div>
          )}
          {
            <div className="button">
              <button disabled={countRes >= 100} onClick={AllahuAkbar}>
                AllahuAkbar
              </button>
            </div>
          }
        </div>
      <div className="completedContainer">
      {countRes >= 100 && <div className="completed">Your Task Completed</div>}
      {countRes >= 100 && (
        <div className="reset" onClick={Reset}>
          <button>Reset</button>
        </div>
      )}
      </div>
      </div>
      
    </>
  );
}

export default Tasbih;

