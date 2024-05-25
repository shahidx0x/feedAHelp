import './App.css'
import CompletedTodoList from "./components/TodoList/CompletedTodoList";
import TodoList from "./components/TodoList/TodoList";

function App() {
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
              <input className="input-field" type="text" />
              <button type="button" className="input-button">
                ADD
              </button>
            </div>
          </div>
          <div>
            <h2 className="input-label">Todo List</h2>
            <div className="flex flex-col gap-2 mt-2 p-2">
              <TodoList />
              <TodoList />
              <TodoList />
              <TodoList />
              <TodoList />
            </div>
          </div>
          <div>
            <h2 className="input-label">Completed</h2>
            <div className="flex flex-col gap-2 mt-2 p-2">
              <CompletedTodoList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
