import Container from "./styles/Container.ts";
import AddNewItem from "../AddNewItem";
import TodoItem from "../TodoItem/index.tsx";
import {useAppSelector} from "@/utils/hooks/store.ts";


const TodoList = () => {
  const todos = useAppSelector(state => state.todos.todos)

  return (
    <Container>
      {todos.map((item) => <TodoItem item={item} key={item.id}/>)}
      <AddNewItem/>
    </Container>
  );
};

export default TodoList;