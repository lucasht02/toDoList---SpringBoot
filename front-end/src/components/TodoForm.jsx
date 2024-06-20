import React from "react";

const TodoForm = ({addTodo}) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      // adicionar tarefa
      addTodo(value);
      // limpar formulário apos envio
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Qual sua nova tarefa?"
        value={value} onChange={(e) =>
            setValue(e.target.value)}
      />
      <button type="submit" className="border py-1 px-3 rounded">
        Adicionar nova tarefa
      </button>
    </form>
  );
};

export default TodoForm;
