import { useRef, useState } from "react";
import { Todo } from "../../types/todo.types";
interface todoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, text?: string, type?: string) => void;
}
const TodoListItem: React.FC<todoItemProps> = ({
  todo,
  deleteTodo,
  updateTodo,
}) => {
  const [edit, setEdit] = useState(false);
  const [checked] = useState(todo.completed);
  const updateRef = useRef<HTMLInputElement>(null);
  const handleUpdate = () => {
    setEdit((prev) => !prev);
    if (updateRef.current?.value) {
      updateTodo(todo.id, updateRef.current.value);
    }
  };
  return (
    <div className="p-2 border rounded-md">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <input
            type="checkbox"
            defaultChecked={checked}
            onChange={() => updateTodo(todo.id, todo.text, "checkbox")}
          />
          <p className={edit ? `hidden` : `block`}>
            <span className={todo.completed ? `line-through` : ""}>
              {todo.text}
            </span>
          </p>
          <input
            ref={updateRef}
            type="text"
            className={edit ? `block edit-input` : `hidden`}
            defaultValue={todo.text}
          />
        </div>
        <div className="flex gap-2">
          <button
            className={edit ? "hidden" : "underline text-blue-500"}
            onClick={() => setEdit((prev) => !prev)}
          >
            Edit
          </button>
          <button
            className={edit ? "underline text-blue-500" : "hidden"}
            onClick={() => handleUpdate()}
          >
            Save
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="underline text-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoListItem;
