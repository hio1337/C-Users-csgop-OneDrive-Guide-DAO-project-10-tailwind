import React from "react";
import Item from "./item";

export default function ItemsList(props) {
  return (
    <ul className="shop flex justify-center">
      {props.items.map((item) => (
        <li key={item.id} className="flex flex-col items-center">
          <Item info={item} />
          <button
            className="btn-delete flex flex-col items-center justify-center bg-pink-500 text-white px-4 py-2 rounded mt-2 hover:bg-pink-600 transition-colors duration-300"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
