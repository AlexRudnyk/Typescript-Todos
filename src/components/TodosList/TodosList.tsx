import { TaskItem } from "../TaskItem";
import { Container } from "./TodosList.styled";
import { useAppSelector } from "../../hook";

export const TodosList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.list);
  return (
    <Container>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <TaskItem todo={todo} />
          </li>
        );
      })}
    </Container>
  );
};
