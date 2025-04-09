import React from 'react'
import Delete from './assets/Delete.png'





function TodoItems({text,id,isComplete,deleteTodo,toggle}) {
  return (
    <div className="flex items-center my-3 gap-2">
        <div onClick={()=>{toggle(id)}} className="flex flex-1 cursor-pointer">
            <p className={`text-slate-600 text-[20px] ml-5 decoration-slate-500 ${isComplete ? "line-through" : "" }`}>{text}</p>
        </div>

            <img onClick={()=>deleteTodo(id)} className="w-7 h-7 cursor-pointer" src={Delete} alt="" />
           
    </div>
  )
}

export default TodoItems