import {Button, Typography} from "@mui/material";
import Container from "./styles/Container";
import {useAppSelector} from "@/utils/hooks/store.ts";
import {useTranslation} from "react-i18next";
import {store} from "@/utils/store";
import {setUser} from "@/utils/store/slices/userSlices.ts";

const Header = () => {
  const user = useAppSelector(state => state.user.user)
  const {t} = useTranslation()

  function handleLogout() {
    localStorage.clear();
    store.dispatch(setUser(null));
  }

  return (
    <Container>
      <Typography>{user?.name}</Typography>
      <Button onClick={handleLogout}>{t('Log out')}</Button>
    </Container>
  );
};

export default Header;