import React from 'react'
import { Trash, Check } from 'lucide-react'

const TodoList = ({description, id, completed, onDelete}) => {

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/api/task/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}    
    })
    onDelete();
  }

  const handleComplete = async (id) => {
    await fetch(`http://localhost:8080/api/task/${id}/complete`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'}    
    })
    onDelete();
  }

  return (
    <div className='flex space-x-3'>
      <p className={completed ? 'text-slate-400' : ''}>{description}</p>
      <div className='flex items-center gap-2'>
        {completed ? <></> : <Check className='size-5' onClick={() => handleComplete(id)}/> }
        <Trash className='size-4' onClick={() => handleDelete(id)}/>
      </div>
    </div>
  )
}

export default TodoList;
