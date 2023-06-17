import { IItem } from "../../types/todo";

interface IProps {
  todos: IItem[];
}

export const TodosList: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
};
