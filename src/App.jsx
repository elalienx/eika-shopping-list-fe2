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
      {/* if list.length is empty show Welcome else show ShoppingScreen */}
      {/* is is list.length equal 0? */}
      {/* Ternary operation ?: */}
      {list.length === 0 ? <WelcomeScreen /> : <ShoppingScreen />}
    </div>
  );
}
