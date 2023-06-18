import { useState } from "react";
import { TitleText, Container, CheckInput } from "./TaskItem.styled";

interface IProps {
  todo: {
    id: string;
    title: string;
  };
  remove: (id: string) => void;
}

export const TaskItem: React.FC<IProps> = (props) => {
  const [done, setDone] = useState(false);

  const handleToggle = () => {
    setDone(!done);
  };

  return (
    <Container>
      <CheckInput type="checkbox" onChange={handleToggle} />
      <TitleText done={done}>{props.todo.title}</TitleText>
      <button
        type="button"
        onClick={() => {
          props.remove(props.todo.id);
        }}
      >
        Delete
      </button>
    </Container>
  );
};
