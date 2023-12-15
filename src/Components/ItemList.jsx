import React from 'react'
import './ItemList.css'

function ItemList({ListItem,onSelect,id}) {

    const delFunc = () =>{
        onSelect(id)
    }

  return (
    <div className="BtnList">
              <button onClick={delFunc} >X</button>
              <li>{ListItem}</li>
              </div>
            )}

export default ItemList
