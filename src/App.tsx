import AuthPage from "@/pages/AuthPage";
import MainPage from "./pages/MainPage";
import {useUser} from "@/utils/hooks/user.ts";
import LoadingPage from "./pages/LoadingPage";

function App() {
  const {user, loading} = useUser();

  if (loading) {
    return (<LoadingPage/>)
  }

  return user ?
    <MainPage/> : <AuthPage/>
}

export default App
