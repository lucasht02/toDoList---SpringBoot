import React from "react";

const TodoForm = ({ onAdd }) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value) {
      await fetch("http://localhost:8080/api/task", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          description: value,
          priority: "ALTA",
          dueInDays : 10
        })
      })
      setValue("");
      onAdd();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-3">
      <input
        type="text"
        placeholder="Qual sua nova tarefa?"
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        className="py-1 px-4"
      />
      <button type="submit" className="border py-2 px-4 rounded bg-sky-500 text-white">
        Adicionar nova tarefa
      </button>
    </form>
  );
};

export default TodoForm;
