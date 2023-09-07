import {Todo, TodoCreate} from "@/common/types/Todo";
import {db} from "@/main.tsx";
import {collection, getDocs, query, where} from "firebase/firestore";
import {nanoid} from "@reduxjs/toolkit";
import {addTodo, fetchTodos, updateTodo} from "@/utils/firebase/todoStorage.ts";


jest.mock("@/main.tsx");
jest.mock("firebase/firestore");

describe("Todo Api", () => {
  const testUserId = "testUserId";
  const testTodo: Todo = {id: nanoid(), text: "Test Todo", userId: testUserId, completed: false} as Todo;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("fetchTodos", () => {
    it("fetches todos for the given user id", async () => {
      const mockedGetDocs = getDocs as jest.MockedFunction<typeof getDocs>;
      mockedGetDocs.mockResolvedValueOnce({
        docs: [{id: testTodo.id, data: () => testTodo}],
      });

      const result = await fetchTodos(testUserId);
      expect(result).toEqual([testTodo]);

      expect(collection).toHaveBeenCalledWith(db, "todos");
      expect(query).toHaveBeenCalledWith(collection(db, "todos"), where("userId", "==", testUserId));
      expect(getDocs).toHaveBeenCalled();
    });
  });

  describe("addTodo", () => {
    it("adds a new todo", async () => {
      const todoInput: TodoCreate = {text: "Test Todo Create", userId: testUserId};

      const result = await addTodo(todoInput);
      const expectedTodo = {...todoInput, id: expect.any(String), completed: false};

      expect(result).toEqual(expectedTodo);
    });
  });

  describe("updateTodo", () => {
    it("updates an existing todo", async () => {
      const updatedTodo = {...testTodo, completed: true};

      await updateTodo(updatedTodo);

      expect(collection).toHaveBeenCalledWith(db, "todos");
      expect(query).toHaveBeenCalledWith(collection(db, "todos"), where("userId", "==", testUserId));
    });

    it("does not update when no value or id provided", async () => {
      await updateTodo(null as unknown as Todo);
      expect(collection).not.toHaveBeenCalled();
      expect(query).not.toHaveBeenCalled();
    });
  });
});
