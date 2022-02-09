// NPM packages
import { useEffect, useState } from "react";

// Project files
import Modal from "./components/Modal";
import WelcomeScreen from "./screens/WelcomeScreen";
import ShoppingScreen from "./screens/ShoppingScreen";

export default function App() {
  // Local state
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Methods
  useEffect(() => onLoad(), []);
  useEffect(() => onSave(), [list]);

  function onLoad() {
    const rawData = localStorage.getItem("eika-tasks");
    const parsedData = JSON.parse(rawData) || [];

    setList(parsedData);
  }

  function onSave() {
    const data = JSON.stringify(list);

    localStorage.setItem("eika-tasks", data);
  }

  function onAddItem(name, price) {
    const newItem = {
      id: list.length,
      name: name,
      price: price,
      imageURL: "",
      isCompleted: false,
    };

    setList([...list, newItem]);
  }

  function onChecbox(id) {
    const clonedList = [...list];
    const index = clonedList.findIndex((item) => item.id === id);
    const item = clonedList[index];

    item.isCompleted = !item.isCompleted;
    setList(clonedList);
  }

  return (
    <div className="App">
      {list.length === 0 && <WelcomeScreen setShowModal={setShowModal} />}
      {list.length > 0 && (
        <ShoppingScreen
          list={list}
          setShowModal={setShowModal}
          onChecbox={onChecbox}
        />
      )}

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        onAddItem={onAddItem}
      />
    </div>
  );
}
