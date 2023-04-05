import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useState } from 'react';
import { useEffect } from 'react';
import { Button,FormControl,Form } from 'react-bootstrap';

import { ReactComponent as Edit } from './assets/edit.svg';
import { ReactComponent as Trash } from './assets/trash.svg';
import { ReactComponent as Save } from './assets/save.svg';


function App() {

  const[todoList,setTodoList]=useState([])

  const[todo,setTodo]=useState("");

  const addTodo=()=>{
    setTodoList((prevTodoList)=>[...prevTodoList,todo])
    setTodo("")
  }

  return (

      <div className="container ps-5 pe-5 d-flex flex-column w-50 mt-5">
    <div className='d-flex mt-5'>
    <FormControl
          className='w-70'
          placeholder="What needs to be done?"
          value={todo}
          onChange={(e)=>setTodo(e.target.value)}
        />
        <Button
        onClick={()=>{addTodo()}}
         className='ms-3 bg-success border-0'>Add Todo</Button>
      
    </div>
    <div className=' mt-3 w-80 '>
      {
        todoList.map(
          (todoItem,index) =><div className='d-flex mt-2 justify-content-between' key={index}>
            <div className='d-flex'>
             <Form.Check 
             type="checkbox"
             className='me-2'
            />
            <label>
            {todoItem}
            </label>
            </div>
          <div className=''>
          <button className='border-0 bg-transparent'>
          <Trash className='me-1 icon'  width={20} height={20} ></Trash>
          <Edit className='me-1 icon' width={20} height={20}></Edit>
          <Save className='icon' width={20} height={20}></Save>
          </button>
          </div>
    
          </div>
        )
      }
    </div>
      </div>
     
       

  );
}

export default App;
