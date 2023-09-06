import Page from "../common/styles/Page.ts";
import {useTranslation} from "react-i18next";
import {Typography} from "@mui/material";
import Lists from "./Lists/index.tsx";
import Categories from "./Categories";

const MainPage = () => {
  const {t} = useTranslation()
  return (
    <Page>
      <Typography fontWeight='bold' fontSize='2rem'>
        {t('Todo List')}
      </Typography>
      <Categories/>
      <Lists/>
    </Page>
  );
};

export default MainPage;