import React, { useState } from "react";
import { removeitem, edititem } from "./Redux/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";

import { BsFillPencilFill } from "react-icons/bs";

function Todo({ id, title }) {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState({ id: "", title: "" });
  let isEdit = useSelector((state) => state.todo.isEdit);

  const edittodolist = () => {
    isEdit = !isEdit;
    dispatch(edititem({ id: id, title: newTitle }));
  };
  return (
    <div className=" w-80 mx-auto">
      <div className="flex flex-row justify-between items-center border-2 p-2">
        <span className="text-white">{title}</span>
        {isEdit && (
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="bg-slate-500"
          />
        )}

        <div>
          <button
            type="button"
            onClick={() => {
              dispatch(removeitem(id));
            }}
          >
            <BsTrash className="text-3xl text-red-400 mx-3" />
          </button>
          <button type="button" onClick={edittodolist}>
            <BsFillPencilFill className="text-3xl text-green-300" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
