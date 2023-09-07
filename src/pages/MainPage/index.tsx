import {useTranslation} from "react-i18next";
import {Typography} from "@mui/material";
import Header from "@/Components/Header/index.tsx";
import Page from "@/common/styles/Page";
import TodoList from "@/Components/TodoList";
import {useInitTodos} from "@/utils/hooks/initTodos.ts";

const MainPage = () => {
  const {t} = useTranslation();
  useInitTodos();

  return (
    <Page>
      <Header/>
      <Typography fontWeight='bold' fontSize='2rem'>
        {t('Todo List')}
      </Typography>
      <TodoList/>
    </Page>
  );
};

export default MainPage;