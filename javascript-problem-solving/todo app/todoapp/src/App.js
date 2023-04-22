
//form - input box, add items
//list - completed and delete item button along with item


import {useState} from "react";

const listOfItem = [
  {key:1 , value:"item1", complete:true},
   {key:2 , value:"item2", complete:false},
  {key:3, value:"em3", complete:true},
]

function List({list, setTodos}){

  function markStatus(key){
    setTodos(
       list.map(val => {
      if(val.key == key){
        return {...val, complete:!val.complete}
        
      }else{
       return val;
      }
      
    })
    )
   
   
  }

   function deleteItem(key){
    setTodos(
       list.filter(val => {
      if(val.key == key){
        return false;
        
      }else{
       return true;
      }
      
    })
    )
   
   
  }
  return (
    <>
        <ol>{list.map(val => 
      <>
        <li key={val.key}>
          {val.complete?"c   ":"ic   "}{val.value}
    </li>
           <button onClick={()=>markStatus(val.key)} >Mark complete/incomplete</button>   
          <button onClick={ ()=>deleteItem(val.key)}>Delete item</button>   
      </>
             
   )}</ol>
   
    </>
  
  )
}


function TodoForm(){
  const [toDoList, setTodoList] = useState(listOfItem);
  const [inputValue, setInputValue] = useState("");

  function addToDoItem(){
    setTodoList(prevValue => [...prevValue, {key:`${prevValue.length+1}${inputValue}`,  complete:false, value:inputValue}])
    setInputValue("");
  }
  return(
    <>
      <input value={inputValue} onChange={(e)=>setInputValue(e.currentTarget.value)} />
      <button onClick={addToDoItem}>Submit</button>
      <h1>{<List setTodos={setTodoList} list={toDoList} />}</h1>
    </>
    
  )
}

function TodoApp(){
  return(
    <TodoForm />
  )
}


function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
