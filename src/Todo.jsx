import React, { useEffect, useRef, useState } from 'react'
import TodoItems from './TodoItems'



function Todo() {

    const inputRef = useRef()
    const [todoList,setTodoList] = useState([])

    function add(){
        const inputText = inputRef.current.value.trim();
       
        if(inputText ===""){
            alert("Empty You Should Add Task")
            return null;
        }
        const newTodo = {
            id:Date.now(),
            text:inputText,
            isComplete:false,
        }
        setTodoList((prev)=>[...prev,newTodo])
        inputRef.current.value = "";
    }

    function deleteTodo(id){
        setTodoList((prevTodo)=>{
           return prevTodo.filter((todo)=> todo.id !== id)
        })
    }

    function toggle(id){
        setTodoList((prevTodo)=>{
            return prevTodo.map((todo)=>{
                if(todo.id === id){
                    return {...todo,isComplete:!todo.isComplete}
                }
                return todo;
            })
        })
    }
    useEffect(()=>{
        console.log(todoList)
    },[todoList])

  return (
    <div className="sm:w-full bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">

        {/* title */}

        <div className="flex justify-center text-3xl fond-bold">To-Do List</div>

        {/* input box */}

        <div className="sm:flex md:flex-row items-center my-7 border rounded-full bg-gray-200">
            <input 
                ref={inputRef} 
                className="sm:flex flex-wrap     md:bg-transparent border-0 outline-none placeholder:text-slate-600 flex-1 h-14 pl-6 pr-2"
                type="text" placeholder="Add Your Task" 
            />
            <button 
                onClick={add} 
                className="md:border-none w-32 h-14 rounded-full cursor-pointer bg-orange-600 text-white text-lg font-medium">
                Add + 
                </button>
        </div>

        {/* Todo list */}

        <div>
            {todoList.map((item,index)=>{
                return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>

            })}
            
            
            
            
             
        </div>

    </div>
  )
}

export default Todo 