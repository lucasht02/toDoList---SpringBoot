import React from "react";

const TodoForm = () => {
  return (
    <form >
      <input
        type="text"
        className="todo-input"
        placeholder="Qual sua nova tarefa?"
      />
      <button type="submit" className="border py-1 px-3 rounded">
        Adicionar nova tarefa
      </button>
    </form>
  );
};

export default TodoForm;
