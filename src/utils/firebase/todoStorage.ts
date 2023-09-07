import {addDoc, collection, doc, getDocs, query, updateDoc, where} from "firebase/firestore";
import {db} from "@/main.tsx";
import {Todo, TodoCreate} from "@/common/types/Todo.ts";
import {nanoid} from "@reduxjs/toolkit";

export const fetchTodos = async (userId: string): Promise<Todo[]> => {
  let result: Todo[] = [];

  const todosRef = collection(db, "todos");
  const matchingItems = query(todosRef, where("userId", "==", userId));

  await getDocs(matchingItems).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }) as Todo);
    result = newData;
  });
  return result;
};

export const addTodo = async (value: TodoCreate): Promise<Todo> => {
  const newValue: Todo = {...value, id: nanoid(), completed: false}
  await addDoc(collection(db, "todos"), newValue);

  return newValue;
}

export const updateTodo = async (value: Todo): Promise<void> => {
  if (!value?.id) {
    return
  }

  const docRef = doc(db, 'todos', value.id);
  await updateDoc((docRef), value);
}

