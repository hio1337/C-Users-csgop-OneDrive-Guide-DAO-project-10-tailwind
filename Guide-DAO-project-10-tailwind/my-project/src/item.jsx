import { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="item item flex flex-col items-center bg-purple-100 p-4">
      <div className="item-info text-center">
        <h2 className="text-pink-500 font-bold text-xl mr-3">{info.name}</h2>
        <p className="text-pink-500 mr-3">{info.desc}</p>
      </div>
      <div className="item-quantity flex items-center space-x-4 mt-2">
        <button
          className="item-less bg-pink-500 font-bold text-white px-3 py-1 rounded-lg border-2 disabled:bg-gray-300 disabled:border-0 disabled:text-white hover:text-pink-500 hover:bg-purple-100 p-1.5 transition-colors duration-400"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="item-total text-pink-500 font-bold text-xl">{total ? total : ""}</h3>
        <button className="item-more bg-pink-500 font-bold text-white px-2.5 py-1 rounded-lg border-2 disabled:bg-gray-300  hover:text-pink-500 hover:bg-purple-100 p-1.5 transition-colors duration-400" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}  
// File: my-project/src/item.js

