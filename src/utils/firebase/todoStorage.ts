import {addDoc, collection, doc, getDocs, updateDoc} from "firebase/firestore";
import {db} from "@/main.tsx";
import {Todo} from "@/common/types/Todo.ts";
import {nanoid} from "@reduxjs/toolkit";

export const fetchTodos = async (): Promise<Todo[]> => {
  let result: Todo[] = []

  await getDocs(collection(db, "todos"))
    .then((querySnapshot) => {
      const newData = querySnapshot.docs
        .map((doc) => ({...doc.data(), id: doc.id} as Todo));
      result = (newData);
    })
  return result
}

export const addTodo = async (value: Omit<Todo, 'id'>): Promise<Todo> => {
  const newValue = {...value, id: nanoid()}

  await addDoc(collection(db, "todos"), newValue);
  console.log(newValue)
  return newValue;
}

export const updateTodo = async (value: Todo): Promise<void> => {
  if (!value?.id) {
    return
  }

  const docRef = doc(db, 'todos', value.id);
  await updateDoc((docRef), value);
}

