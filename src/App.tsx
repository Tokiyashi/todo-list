import MainPage from "./MainPage";
import {useInitStore} from "@/utils/hooks/initTodos.ts";
import AuthPage from "@/pages/AuthPage";
import {useAppSelector} from "@/utils/hooks/store.ts";

function App() {
  useInitStore()
  const user = useAppSelector(state => state.user.user);
  return user ?
    <MainPage/> : <AuthPage/>
}

export default App
