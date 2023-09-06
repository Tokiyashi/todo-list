import Container from "./styles/Container";
import TodoList from "../../Components/TodoList";

const Lists = () => {
  return (
    <Container>
      <TodoList title='start'/>
      <TodoList title='In Progress'/>
      <TodoList title='Done'/>
    </Container>
  );
};

export default Lists;