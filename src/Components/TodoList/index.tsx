import Container from "./styles/Container.ts";
import AddNewItem from "../AddNewItem";
import TodoItem from "../TodoItem/index.tsx";
import {useAppSelector} from "@/utils/hooks/store.ts";
import {Filter} from "@/common/enums/filters.ts";

type Props = { filter: Filter }

const filterToCompleted = new Map<Filter, boolean>([
  [Filter.ACTIVE, false],
  [Filter.DONE, true]
])


const TodoList = ({filter}: Props) => {
  const todos = useAppSelector(state => state.todos.todos)

  const isShouldBeFiltered = filter !== Filter.ALL

  return (
    <Container>
      {isShouldBeFiltered ?
        todos
          .filter(item => item.completed === filterToCompleted.get(filter))
          .map((item) => <TodoItem item={item} key={item.id}/>) :
        todos.map((item) => <TodoItem item={item} key={item.id}/>)
      }
      <AddNewItem/>
    </Container>
  );
};

export default TodoList;