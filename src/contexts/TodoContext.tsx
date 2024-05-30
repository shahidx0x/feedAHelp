import React, { ReactNode, createContext, useContext } from "react";
import { Todo } from "../types/todo.types";
import { useTodos } from "../hooks/useTodos";

interface TodoContextProps {
  todos: Todo[];
  addTodo: (text: string) => void;
  updateTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { todos, addTodo, deleteTodo, updateTodo } = useTodos();
  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  return context;
};
