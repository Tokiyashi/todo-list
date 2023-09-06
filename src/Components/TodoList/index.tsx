import Container from "./styles/Container.ts";
import AddNewItem from "../AddNewItem";
import {Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import TodoItem from "../TodoItem/index.tsx";
import {useAppSelector} from "@/utils/hooks/store.ts";

type Props = {
  title: string;
}

const TodoList = ({title}: Props) => {
  const {t} = useTranslation()
  const todos = useAppSelector(state => state.todos.todos)

  return (
    <Container>
      <Typography>{t(title)}</Typography>
      {todos.map((item) => <TodoItem item={item} key={item.id}/>)}
      <AddNewItem/>
    </Container>
  );
};

export default TodoList;