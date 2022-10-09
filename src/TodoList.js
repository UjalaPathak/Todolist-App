import React from 'react'

function TodoList(props) {

   
  return (
    <div className='todo_style'>
        
       <li>{props.text}</li>
       <button onClick={()=>{
        props.onSelect(props.id)
       }}>-</button>
    </div>
  )
}

export default TodoList