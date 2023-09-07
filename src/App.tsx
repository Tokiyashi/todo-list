import AuthPage from "@/pages/AuthPage";
import {useAppSelector} from "@/utils/hooks/store.ts";
import MainPage from "./pages/MainPage";

function App() {
  const user = useAppSelector(state => state.user.user);
  return user ?
    <MainPage/> : <AuthPage/>
}

export default App
