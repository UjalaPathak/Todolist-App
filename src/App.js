import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [additem,setAdditem] = useState();
  const[items,setItems] = useState([]);

  const itemEvent = (e)=>{
    setAdditem(e.target.value);
  }

  const listofitem = ()=>{

    setItems((olditems)=>{
      return[...olditems,additem];
    })
    setAdditem('');
    

    
  }
  const deletitems =(id)=>{
    
    setItems((olditems)=>{
      return olditems.filter((arr,index) => {
        return index  !== id;
        
      })
    })
  }



  return (
    <div className="main_div">
      <div className="center_div">
          <br/>
          <h1>ToDo List</h1>
          <br/>
        
        
          <input type="text" placeholder='Add an Items' onChange={ itemEvent} value={additem} />
          <button onClick={listofitem}>+</button>


          <ol>
            
            {items.map((itemval,index)=>{
              return <TodoList id={index}  key={index} text={itemval} onSelect={deletitems}
              />
            })}
          </ol>
        
      </div>
     
    </div>
  );
}

export default App;
