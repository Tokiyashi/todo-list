import MainPage from "./MainPage";
import {useAppDispatch} from "@/utils/hooks/store.ts";
import {useEffect} from "react";
import {fetchAllTodos} from "@/utils/store/slices/todosSlices.ts";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <MainPage/>
  )
}

export default App
