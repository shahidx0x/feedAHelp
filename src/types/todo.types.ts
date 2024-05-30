export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
export interface TodoContextProps {
  todos: Todo[];
  addTodo: (text: string) => void;
  updateTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}