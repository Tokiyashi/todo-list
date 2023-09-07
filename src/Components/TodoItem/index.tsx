import Container from "./styles/Container.ts";
import {Checkbox, Typography} from "@mui/material";
import {ChangeEvent, useState} from "react";
import {Todo} from "@/common/types/Todo.ts";
import {updateTodo} from "@/utils/firebase/todoStorage.ts";

type Props = {
  item: Todo;
}

const TodoItem = ({item}: Props) => {
  const {text, completed} = item
  const [isCompleted, setIsCompleted] = useState(completed)

  async function handleCheck(e: ChangeEvent<HTMLInputElement>) {
    const {checked} = e.target
    setIsCompleted(checked);
    await updateTodo({...item, completed: checked});
  }

  return (
    <Container>
      <Checkbox onChange={handleCheck} checked={isCompleted}/>
      <Typography sx={{textDecoration: isCompleted ? 'line-through' : 'none'}}>{text}</Typography>
    </Container>
  );
};

export default TodoItem;