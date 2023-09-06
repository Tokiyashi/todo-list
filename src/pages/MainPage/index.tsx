import {useTranslation} from "react-i18next";
import {Typography} from "@mui/material";
import Header from "@/Components/Header/index.tsx";
import Page from "@/common/styles/Page";
import TodoList from "@/Components/TodoList";

const MainPage = () => {
  const {t} = useTranslation()
  return (
    <Page>
      <Header/>
      <Typography fontWeight='bold' fontSize='2rem'>
        {t('Todo List')}
      </Typography>
      <TodoList title='list'/>
    </Page>
  );
};

export default MainPage;