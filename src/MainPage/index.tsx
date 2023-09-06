import Page from "../common/styles/Page.ts";
import {useTranslation} from "react-i18next";
import {Typography} from "@mui/material";
import Lists from "./Lists/index.tsx";
import Header from "@/Components/Header/index.tsx";

const MainPage = () => {
  const {t} = useTranslation()
  return (
    <Page>
      <Header/>
      <Typography fontWeight='bold' fontSize='2rem'>
        {t('Todo List')}
      </Typography>
      <Lists/>
    </Page>
  );
};

export default MainPage;