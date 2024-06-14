import React from 'react'
import { Trash } from 'lucide-react'

const TodoList = () => {
  return (
    <div className='flex space-x-3'>
      <p>Tarefa 1</p>
      <div className='flex items-center'>
        <Trash className='size-4'/>
      </div>
    </div>
  )
}

export default TodoList