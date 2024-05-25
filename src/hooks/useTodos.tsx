import { useState } from "react";
import { Todo } from "../types/todo.types";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const payload: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, payload]);
  };

  const updateTodo = (id: number, text?: string, type?: string) => {
    if (type === "checkbox") {
      setTodos((prev) =>
        prev.map((each_todo) =>
          each_todo.id === id
            ? { ...each_todo, completed: !each_todo.completed }
            : each_todo
        )
      );
    } else {
      setTodos((prev) =>
        prev.map((each_todo) =>
          each_todo.id === id ? { ...each_todo, text: text || "" } : each_todo
        )
      );
    }
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((e) => e.id !== id));
  };
  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};
