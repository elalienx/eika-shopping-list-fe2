export default function WelcomeScreen({ list, setList }) {
  function createItem() {
    const newItem = {
      id: list.length,
      name: "sofa",
      price: 500,
      imageURL: "",
      isCompleted: false,
    };

    setList((list) => [...list, newItem]);
  }

  return (
    <div>
      <img src="" alt="A background with a  circle with works EIKA inside" />
      <img src="" alt="A woman comming out of store with 2 shopping bags" />
      <h1>EIKA's shopping list</h1>
      <p>
        Welcome to EIKA’s shopping list. Here you will be able to create a todo
        list with for the furniture you want to buy.
      </p>
      <p>
        To get started press the Add new item button and a popup will ask you
        the name and the price of the item you want to add. You can also and an
        image after the item is added by touching the camera icon.
      </p>
      <button onClick={createItem}>Add item</button>
    </div>
  );
}
