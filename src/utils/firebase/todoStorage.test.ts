import {collection, doc, updateDoc,} from "firebase/firestore";
import {nanoid} from "@reduxjs/toolkit";
import {addTodo, updateTodo} from "@/utils/firebase/todoStorage.ts";
import {db} from "@/main.tsx";


jest.mock("@/main.tsx");
jest.mock("firebase/firestore");

describe("Todo Api", () => {

  const testUserId = "testUserId";
  const testTodo = {
    id: nanoid(),
    text: "Test Todo",
    userId: testUserId,
    completed: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("addTodo", () => {
    it("adds a new todo", async () => {
      const todoInput = {text: "Test Todo Create", userId: testUserId};

      const result = await addTodo(todoInput);
      const expectedTodo = {...todoInput, id: expect.any(String), completed: false};

      expect(result).toEqual(expectedTodo);
    });
  });

  describe("updateTodo", () => {
    it("updates an existing todo", async () => {
      const updatedTodo = {...testTodo, completed: true};

      await updateTodo(updatedTodo);

      expect(doc).toHaveBeenCalledWith(db, "todos", updatedTodo.id);
      expect(updateDoc).toHaveBeenCalledWith(doc(collection(db, "todos"), updatedTodo.id), updatedTodo);
    });
  });
});
