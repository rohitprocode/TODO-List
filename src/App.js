import React, { useState } from 'react'
import './App.css'
import ItemList from './Components/ItemList';

function App() {

  const [InputData, setInputData] = useState("");

  const [ListItem, setListItem] = useState([]);

  const [InputField, setInputField] = useState('green')

  const trackInput = (event) => {
    setInputData(event.target.value)
  }

  const AddBtn = () => {
    if (InputData == "") {
      setInputField('red')
      setTimeout(() => {
        alert("Minimum one item required")
        setInputField('green')
      }, 0.500)
    } else {
      setListItem((oldData) => {
        return [...oldData, InputData]
      })
      setInputData("")
      
    }
  }

  const DeleteListItems = (id) => {
    setListItem((oldData) => {
      return oldData.filter((arrElement, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className='Body'>
      <div className="todo-app">
        <h1>ToDo List</h1>
        <div className="bottomContents">
          <div className="inputFunctionality">
            <input type="text" placeholder='Add Items' name="" id="" value={InputData} onChange={trackInput} className={InputField} />
            <button onClick={AddBtn}>Add</button>
          </div>
          <ol>
            {ListItem.map((data, index) => {
              return (
                <ItemList
                  key={index}
                  id={index}
                  ListItem={data}
                  onSelect={DeleteListItems}
                />
              )
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default App
