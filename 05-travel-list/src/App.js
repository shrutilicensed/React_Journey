import { useState } from "react";

const initialItems = [
  { id: 1, name: "Passports", quantity: 2, packed: false },
  { id: 2, name: "Socks", quantity: 12, packed: false },
  { id: 3, name: "T-Shirts", quantity: 5, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 💼 </h1>;
}

function Form() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSumbit(e) {
    e.preventDefault();
    if (!name) return;
    const newItem = { id: Date.now(), name, quantity, packed: false };
    console.log(newItem);
    setName("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSumbit}>
      <h3>What do you need for your trip ?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        placeholder="item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button> Add </button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.quantity} {item.name}{" "}
      </span>
      <button> ❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em> You have X items on your list and you have already packed Y (Y%)</em>
    </footer>
  );
}
