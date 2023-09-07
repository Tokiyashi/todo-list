import Page from "@/common/styles/Page";
import {Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

const LoadingPage = () => {
    const {t} = useTranslation();

    return (
      <Page>
        <Typography>{t('Loading...')}</Typography>
      </Page>
    );
  }
;

export default LoadingPage;