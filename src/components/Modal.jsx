// NPM packages
import { useState } from "react";

export default function Modal({ showModal, setShowModal, onAddItem }) {
  // Local state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Methods
  function onSubmit(event) {
    event.preventDefault();

    onAddItem(name, price);
    setName("");
    setPrice("");
    setShowModal(false);
  }

  function onCancel() {
    setShowModal(false);
  }

  // Safeguard
  if (showModal === false) return null;

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <h2>Create shopping item</h2>
      <label>
        Product name:
        <input
          type="text"
          placeholder="Ex: Chair"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Price
        <input
          type="number"
          placeholder="Ex: 500"
          required
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <button>Submit</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
}
