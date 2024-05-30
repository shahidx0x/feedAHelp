import React, { ReactNode, createContext, useContext } from "react";
import { TodoContextProps } from "../types/todo.types";
import { useTodos } from "../hooks/useTodos";



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

// eslint-disable-next-line react-refresh/only-export-components
export const useTodoContext = (): TodoContextProps | undefined => {
  const context = useContext(TodoContext);
  return context;
};
