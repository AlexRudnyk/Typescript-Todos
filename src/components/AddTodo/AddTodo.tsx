import { useState } from "react";
import { AddTodoContainer, AddButton, InputField } from "./AddTodo.styled";
import { IItem } from "../../types/todo";

interface IProps {
  onAddTodo: (todo: IItem) => void;
}

export const AddTodo: React.FC<IProps> = (props) => {
  const [todo, setTodo] = useState<IItem>({
    id: "",
    title: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((prev) => {
      return {
        ...prev,
        title: e.target.value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.title === "") {
      return;
    }
    props.onAddTodo(todo);
    setTodo((prev) => {
      return {
        ...prev,
        title: "",
      };
    });
  };

  return (
    <AddTodoContainer>
      <h2>Add title</h2>
      <form onSubmit={handleSubmit} id="form">
        <InputField
          type="text"
          onChange={handleChange}
          value={todo.title}
          placeholder="Enter task text..."
        />
        <AddButton type="submit">Add todo</AddButton>
      </form>
    </AddTodoContainer>
  );
};
