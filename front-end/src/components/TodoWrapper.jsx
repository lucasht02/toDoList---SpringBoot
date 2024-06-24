import React, { useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoWrapper = () => {
  const [todos, setTodos] = React.useState([]);

  const fetchTask = async () => {
    try {
      const results = await fetch("http://localhost:8080/api/task", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await results.json();
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const add = () => {
    fetchTask();
  }

  const deleteTodo = () => {
    fetchTask();
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div className="space-y-3 m-auto border p-6 rounded-md bg-white shadow">
      <h1 className="text-xl font-semibold">Lista de Tarefas</h1>
      <TodoForm onAdd={add} />
      <div className="space-y-3">
        {todos.map((item) => (
          <TodoList
            key={item.id}
            id={item.id}
            description={item.description}
            onDelete={deleteTodo}
            completed={item.completed}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoWrapper;
