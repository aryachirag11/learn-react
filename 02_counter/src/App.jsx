import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [countValue, setCountValue] = useState(10);

  // let countValue = 0;
  const incrementValue = () => {
    // countValue++;
    // countValueCounter(countValue);
    // console.log(`Count value : ${countValue}`);
    if (countValue <= 19) setCountValue(countValue + 1);
  };
  const decrementValue = () => {
    // countValue--;
    // countValueCounter(countValue);
    // console.log(`Count value : ${countValue}`);
    if (countValue >= 1) setCountValue(countValue - 1);
  };
  return (
    <>
      <h1>Counter App working</h1>
      <h2>Counter value : {countValue} </h2>
      <button onClick={incrementValue}>value++</button>
      <button onClick={decrementValue}>value--</button>
    </>
  );
}

export default App;
