import React from "react";
import Item from "./item";

export default function ItemsList(props) {
  return (
    <ul className="shop flex justify-center">
      {props.items.map((item) => (
        <li key={item.id} className="flex flex-col items-center">
          <Item info={item} />
          <button
            className="btn-delete flex flex-col items-center justify-center border-2 font-bold  border-pink-500 bg-pink-500 text-white px-4 py-2 mt-2 ml-1 hover:text-pink-500 hover:bg-purple-100 p-1.5 rounded-lg transition-colors duration-400"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
