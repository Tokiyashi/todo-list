import Container from "./styles/Container.ts";
import {Checkbox, Typography} from "@mui/material";
import {t} from "i18next";

const TodoItem = () => {
  return (
    <Container>
      <Checkbox value={false}/>
      <Typography>{t('Todo')}</Typography>
    </Container>
  );
};

export default TodoItem;