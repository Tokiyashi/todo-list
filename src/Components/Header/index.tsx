import Container from "./styles/Container";
import {useAppSelector} from "@/utils/hooks/store.ts";

const Header = () => {
  const user = useAppSelector(state => state.user.user)

  return (
    <Container>
      {user?.name}
    </Container>
  );
};

export default Header;