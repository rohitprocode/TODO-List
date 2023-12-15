import React from "react";
import "./ItemList.css";

function ItemList({ ListItem, onSelect, id }) {
  const delFunc = () => {
    onSelect(id);
  };

  return (
    <div className="BtnList">
      <li>{ListItem}</li>
      <button onClick={delFunc}>X</button>
    </div>
  );
}

export default ItemList;
