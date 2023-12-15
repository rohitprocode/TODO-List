import React, { useState } from 'react'
import './App.css'

function App() {

  const [InputData,setInputData] = useState("");

  const trackInput = (event) =>{
    setInputData(event.target.value)
  }

  const [ListItem,setListItem] = useState([]);

  const AddBtn = ()=>{
    setListItem((oldData)=>{
      return [...oldData,InputData]
    })
    setInputData("")
  }
  return (
    <div className='Body'>
      <div className="todo-app">
        <h1>ToDo List</h1>
        <div className="bottomContents">
          <div className="inputFunctionality">
            <input type="text" placeholder='Add a Items' name="" id="" value={InputData} onChange={trackInput}/>
            <button onClick={AddBtn}>Add</button>
          </div>
          <ol>
            {ListItem.map((data)=>{
              return <li>{data}</li>
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default App
