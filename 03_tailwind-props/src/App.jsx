import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl mb-12">Tailwind CSS</h1>
      <Card userName="Shruti" />
      <Card userName="Shru" btnText="contact" />
    </>
  );
}

export default App;
