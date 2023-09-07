import {addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where} from "firebase/firestore";
import {Todo, TodoCreate} from "@/common/types/Todo.ts";
import {db} from "@/main.tsx";

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
  const newValue: Todo = {...value, completed: false}
  const docRef = await addDoc(collection(db, "todos"), newValue);
  const docSnapshot = await getDoc(docRef);
  
  return {id: docSnapshot.id, ...docSnapshot.data()} as Todo;
}

export const updateTodo = async (value: Todo): Promise<void> => {
  if (!value?.id) {
    return
  }

  const docRef = doc(db, 'todos', value.id);
  await updateDoc((docRef), value);
}

