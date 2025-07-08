import React, { useState } from "react";
import ItemsList from "./itemsList.jsx";
import AddItem from "./addItems.jsx";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!name) {
      setValid("Введите название!");
      return;
    }
    if (!desc) {
      setValid("Введите описание!");
      return;
    }
    setItems([
      ...items,
      {
        id: items.length + 1,
        name: name,
        desc: desc,
      },
    ]);
    setName("");
    setDesc("");
    setValid("");

    fetch("https://learn.guidedao.xyz/api/student/products", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name: name, desc: desc }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescChange(event) {
    setDesc(event.target.value);
  }

  function handleDeleteClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <React.Fragment>
      <AddItem
        name={name}
        desc={desc}
        valid={valid}
        onNameChange={handleNameChange}
        onDescChange={handleDescChange}
        onFormSubmit={handleFormSubmit}
      />
      <div className="flex justify-center items-center text-1xl font-bold mt-5 text-pink-900">{items.length === 0 && <p>Добавьте первый товар</p>}</div>
      <ItemsList items={items} onDeleteClick={handleDeleteClick} />
    </React.Fragment>
  );
}