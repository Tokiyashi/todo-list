import {useAppDispatch, useAppSelector} from "@/utils/hooks/store.ts";
import {useEffect} from "react";
import {fetchAllTodos} from "@/utils/store/slices/todosSlices.ts";

export const useInitTodos = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.user)
  useEffect(() => {
    dispatch(fetchAllTodos(user?.id || ''));
  }, [dispatch]);
}