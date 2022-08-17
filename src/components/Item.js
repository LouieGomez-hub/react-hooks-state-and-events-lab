import React, { useState } from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(false)

  function handleClick() {
    setAddToCart(!addToCart)
  }

  const itemClass = addToCart ? "in-cart" : null

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{addToCart ? "Remove from cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
