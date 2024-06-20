import React, { useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoWrapper = () => {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: description, completed: false }]);
  };

  const fetchTask = () => {
    try {
      const results = fetch("https://todolist-springboot-nbks.onrender.com/api/task", {
        method: 'GET',
        headers: {'Content-Type': 'application/json',}
      })
      setTodos(results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTask()
  }, [])

  return (
    <div>
      <h1 className="text-xl font-semibold">Lista de Tarefas</h1>
      <TodoForm />
      {todos.map((item) => (
        <TodoList key={item.id} />
      ))}
    </div>
  );
};

export default TodoWrapper;
