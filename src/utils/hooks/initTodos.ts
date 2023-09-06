import {useAppDispatch} from "@/utils/hooks/store.ts";
import {useEffect} from "react";
import {fetchAllTodos} from "@/utils/store/slices/todosSlices.ts";

export const useInitStore = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);
}