import {useTranslation} from "react-i18next";
import {Typography} from "@mui/material";
import Header from "@/Components/Header/index.tsx";
import Page from "@/common/styles/Page";
import TodoList from "@/Components/TodoList";
import {useInitTodos} from "@/utils/hooks/initTodos.ts";
import Filters from "@/pages/MainPage/Filters";
import {useState} from "react";
import {Filter} from "@/common/enums/filters.ts";

const MainPage = () => {
  const [currentFilter, setCurrentFilter] = useState(Filter.ALL);
  const {t} = useTranslation();
  useInitTodos();

  return (
    <Page>
      <Header/>
      <Typography fontWeight='bold' fontSize='2rem'>
        {t('Todo List')}
      </Typography>
      <Filters value={currentFilter} onChange={(newValue) => setCurrentFilter(newValue)}/>
      <TodoList filter={currentFilter}/>
    </Page>
  );
};

export default MainPage;