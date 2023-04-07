import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useState } from 'react';
import { useEffect } from 'react';
import { Button,FormControl } from 'react-bootstrap';

// import trash button as component
import { ReactComponent as Trash } from './assets/trash.svg';

// uuid:To create a random unique id
import { v4 as uuidv4 } from 'uuid';


function App() {

  const[todoList,setTodoList]=useState([])

  const[todo,setTodo]=useState("");
  
  const[filter,setFilter]=useState("all");


  const addTodo=()=>{
    setTodoList((prevTodoList)=>[...prevTodoList,{id:uuidv4(), todo:todo, isCompleted:false}])
    setTodo("")
  }
  const completedTodo=(id)=>{
   setTodoList(prevTodoList=>prevTodoList.map(todoItem=> todoItem.id===id
    ?{...todoItem,isCompleted: !todoItem.isCompleted}:todoItem))
  }


  const deleteTodo=(id)=>{
    setTodoList(prevTodoList => prevTodoList.filter(todoItem=>todoItem.id !==id ))

  }

  const clearCompleted = () => {
    setTodoList(todoList.filter((todoItem) => !todoItem.isCompleted));
  };

  let filteredList = [];
  if (filter === "completed") {
    filteredList = todoList.filter((todoItem) => todoItem.isCompleted);
  } else if (filter === "active") {
    filteredList = todoList.filter((todoItem) => !todoItem.isCompleted);
  } else {

    filteredList = todoList;
  }
  

    useEffect(()=>{
      console.log(todoList)
    },[todoList])


      return (

        
      <div className="container ps-5 pe-5 d-flex flex-column w-50 mt-5">
      <div className='wrap d-flex mt-5'>
      <FormControl
            className='w-70'
            placeholder="What needs to be done?"
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
          />
        <Button
        onClick={()=>{addTodo()}}
         className='btn ms-3 bg-success border-0'>Add Todo</Button>
      
    </div>
           {/* NAV BAR (ALL-ACTIVE-COMPLETED-CLEAR COMPLETED) */}
        <div className='d-flex flex-row mt-3' >
        <button  className='title' onClick={() => setFilter("all")}>All</button>
        <button className='title' onClick={() => setFilter("active")}>Active</button>
        <button className='title' onClick={() => setFilter("completed")}>Completed</button>
        <button className='title ' onClick={() => clearCompleted()}>Clear Completed</button>

        </div>

     <div className=' w-80 mt-2'>
      {filteredList.map(
        (todoItem) =><div className='d-flex mt-2 justify-content-between' key={todoItem.id}>
          <div className='d-flex'>
            <label className={ `${todoItem.isCompleted ? "text-decoration-line-through" : ""}` } onClick={()=>{completedTodo(todoItem.id)}} >
            {todoItem.todo}<hr></hr>
            </label>
            </div>
          <div className=''>
          <button className='border-0 bg-transparent'>
              <Trash onClick={()=>deleteTodo(todoItem.id)} className=' icon'  width={20} height={20} ></Trash>
          </button>
          </div>
          </div>
        )}
    </div>
    </div>
  );
}

export default App;
