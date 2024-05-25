import { useState } from "react";

const CompletedTodoList = () => {
  const [edit, setEdit] = useState(false);
  return (
    <div className="p-2 border rounded-md">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <input type="checkbox" checked />
          <p className="line-through">this is the todo</p>
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
            onClick={() => setEdit((prev) => !prev)}
          >
            undo todo
          </button>
          <button className="underline text-red-500">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CompletedTodoList;
