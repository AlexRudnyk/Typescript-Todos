import { useState } from "react";
import { AddTodoContainer, AddButton, InputField } from "./AddTodo.styled";

interface IProps {
  onAddTodo: (title: string) => void;
}

export const AddTodo: React.FC<IProps> = (props) => {
  const [title, setTitle] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title === "") {
      return;
    }
    props.onAddTodo(title);
    setTitle("");
  };

  return (
    <AddTodoContainer>
      <h2>Add title</h2>
      <form onSubmit={handleSubmit} id="form">
        <InputField
          type="text"
          onChange={handleChange}
          value={title}
          placeholder="Enter task text..."
        />
        <AddButton type="submit">Add todo</AddButton>
      </form>
    </AddTodoContainer>
  );
};
