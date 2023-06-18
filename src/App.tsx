import { TodosList } from "./components/TodosList/TodosList";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { useAppDispatch } from "./hook";
import { addTodo } from "./redux/todoSlice";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const addTodoHandler = (title: string) => {
    dispatch(addTodo(title));
  };

  return (
    <>
      <AddTodo onAddTodo={addTodoHandler} />
      <TodosList />
    </>
  );
};
