import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

/*
array structure we used
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
]; 
*/

export default function App() {
  //lifting state up
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  //filtering the elements that dont match the id will stay in the array
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  //updating the item object packed property
  function handleToggleItem(id) {
    setItems((items) =>
      items.map(
        (item) => (item.id === id ? { ...item, packed: !item.packed } : item) //overriding the existing object property
      )
    );
  }

  function handleClearList() {
    // asks before deleting all items
    const confirmed = window.confirm(
      "Are you sure you want to delete all the items?"
    );
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearingList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
