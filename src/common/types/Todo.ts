export type Todo = {
  text: string;
  id: string;
  completed: boolean;
}

export type TodoCreate = {
  text: string;
  userId: string;
}