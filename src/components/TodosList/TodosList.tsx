import { TaskItem } from "../TaskItem";
import { IItem } from "../../types/todo";
import { Container } from "./TodosList.styled";

interface IProps {
  todos: IItem[];
  delete: (id: string) => void;
}

export const TodosList: React.FC<IProps> = (props) => {
  return (
    <Container>
      {props.todos.map((todo) => {
        return (
          <li key={todo.id}>
            <TaskItem todo={todo} remove={props.delete} />
          </li>
        );
      })}
    </Container>
  );
};
