import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoWrapper = () => {
  return (
    <div>
        <h1 className='text-xl font-semibold'>Lista de Tarefas</h1>
        <TodoForm />
        <TodoList />
    </div>
  )
}

export default TodoWrapper