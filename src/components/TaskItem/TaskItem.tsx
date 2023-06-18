import { useState } from "react";
import { useAppDispatch } from "../../hook";
import { deleteTodo, toggleCompleted } from "../../redux/todoSlice";
import { TitleText, Container, CheckInput } from "./TaskItem.styled";

interface IProps {
  todo: {
    id: string;
    title: string;
    completed: boolean;
  };
}

export const TaskItem: React.FC<IProps> = ({ todo }) => {
  const [done, setDone] = useState(false);
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleCompleted(todo.id));
    setDone(!done);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <Container>
      <CheckInput type="checkbox" onChange={handleToggle} />
      <TitleText done={done}>{todo.title}</TitleText>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </Container>
  );
};
