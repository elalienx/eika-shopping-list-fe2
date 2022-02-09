// NPM packages
import { useState } from "react";

// Project files
import Modal from "./components/Modal";
import WelcomeScreen from "./screens/WelcomeScreen";
import ShoppingScreen from "./screens/ShoppingScreen";

export default function App() {
  // Local state
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Methods
  function onAddItem(item) {
    const newItem = {
      id: list.length,
      name: item.name,
      price: item.price,
      imageURL: "",
      isCompleted: false,
    };

    setList([...list, newItem]);
  }

  return (
    <div className="App">
      {list.length === 0 && <WelcomeScreen setShowModal={setShowModal} />}
      {list.length > 0 && (
        <ShoppingScreen list={list} setShowModal={setShowModal} />
      )}

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        onAddItem={onAddItem}
      />
    </div>
  );
}
