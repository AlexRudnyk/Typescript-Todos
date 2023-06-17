import { useState } from "react";
import { AddTodoContainer } from "./AddTodo.styled";
import { IItem } from "../../types/todo";

interface IProps {
  onAddTodo: (todo: IItem) => void;
}

export const AddTodo: React.FC<IProps> = (props) => {
  const [todo, setTodo] = useState<IItem>({
    id: "",
    title: "",
  });

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((prev) => {
      return {
        ...prev,
        title: e.target.value,
      };
    });
  };

  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.title === "") {
      return;
    }
    props.onAddTodo(todo);
  };

  return (
    <AddTodoContainer>
      <h2>Add title</h2>
      <form onSubmit={handlerSubmit} id="form">
        <input type="text" id="title" onChange={handlerChange} />
        <button type="submit">Add todo</button>
      </form>
    </AddTodoContainer>
  );
};
