import Container from "./styles/Container.ts";
import {Checkbox, Typography} from "@mui/material";
import {ChangeEvent, useState} from "react";
import {Todo} from "@/common/types/Todo.ts";

type Props = {
  item: Todo;
}

const TodoItem = ({item}: Props) => {
  const {text, completed} = item
  const [isCompleted, setIsCompleted] = useState(completed)

  function handleCheck(e: ChangeEvent<HTMLInputElement>) {
    setIsCompleted(e.target.checked)
  }

  return (
    <Container>
      <Checkbox onChange={handleCheck} checked={isCompleted}/>
      <Typography sx={{textDecoration: isCompleted ? 'line-through' : 'none'}}>{text}</Typography>
    </Container>
  );
};

export default TodoItem;