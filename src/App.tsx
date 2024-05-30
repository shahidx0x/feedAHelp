import { useRef } from "react";
import "./App.css";
import TodoListItem from "./components/TodoList/TodoListItem";
import { useTodoContext } from "./contexts/TodoContext";
import { Todo, TodoContextProps } from "./types/todo.types";

function App() {
  const { todos, addTodo, updateTodo, deleteTodo } =
    useTodoContext() as TodoContextProps;
  const inputRef = useRef<HTMLInputElement>(null);
  const handleAddTodo = () => {
    if (inputRef.current?.value) {
      addTodo(inputRef.current.value);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="border rounded-md">
          <h2 className="font-bold text-4xl text-center font-mono border-b-2 pb-2 p-10">
            Spiderman Todo App
          </h2>
          <div className="border-b-8"></div>
          <div className="pt-5 flex flex-col">
            <label className="input-label">Add Item</label>
            <div className="flex p-2 pt-5">
              <input ref={inputRef} className="input-field" type="text" />
              <button
                onClick={() => handleAddTodo()}
                type="button"
                className="input-button"
              >
                ADD
              </button>
            </div>
          </div>
          <div>
            <h2 className="input-label">Todo List</h2>
            <div className="flex flex-col gap-2 mt-2 p-2">
              {todos.length !== 0 ? (
                todos
                  .filter((item: Todo) => item.completed === false)
                  .map((each: Todo) => (
                    <TodoListItem
                      key={each.id}
                      todo={each}
                      updateTodo={updateTodo}
                      deleteTodo={deleteTodo}
                    />
                  ))
              ) : (
                <p className="p-5 border rounded-md bg-yellow-100 font-medium text-gray-500">
                  No item in the todo list
                </p>
              )}
            </div>
          </div>
          <div>
            <h2 className="input-label">Completed</h2>
            <div className="flex flex-col gap-2 mt-2 p-2">
              {todos
                .filter((item: Todo) => item.completed === true)
                .map((each: Todo) => (
                  <TodoListItem
                    key={each.id}
                    todo={each}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
