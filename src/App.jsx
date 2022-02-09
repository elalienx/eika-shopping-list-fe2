// NPM packages
import { useState } from "react";

// Project files
import WelcomeScreen from "./screens/WelcomeScreen";
import ShoppingScreen from "./screens/ShoppingScreen";

export default function App() {
  // Local state
  const [list, setList] = useState([]);

  return (
    <div className="App">
      {list.length === 0 && <WelcomeScreen list={list} setList={setList} />}
      {list.length > 0 && <ShoppingScreen list={list} setList={setList} />}
    </div>
  );
}
