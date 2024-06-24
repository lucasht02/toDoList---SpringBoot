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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Qual sua nova tarefa?"
        value={value} 
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="border py-1 px-3 rounded">
        Adicionar nova tarefa
      </button>
    </form>
  );
};

export default TodoForm;
