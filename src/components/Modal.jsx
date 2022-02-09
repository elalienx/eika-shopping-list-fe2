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

  function validateName() {
    const parsedName = name.trim();

    if (parsedName.length === 0) {
      setName("");
      alert("Product name must not be empty");
    } else {
      setName(parsedName);
    }
  }

  function validatePrice() {
    const parsedPrice = Number(price.trim());

    if (parsedPrice < 1) {
      setPrice("");
      alert("Product prie must cost more than 0");
    } else {
      setPrice(parsedPrice);
    }
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
          onBlur={validateName}
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
          onBlur={validatePrice}
        />
      </label>
      <button>Submit</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
}
