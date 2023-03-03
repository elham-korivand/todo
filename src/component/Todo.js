import React from "react";
import { removeitem, edititem } from "./Redux/TodoSlice";
import { useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";

import { BsFillPencilFill } from "react-icons/bs";

function Todo({ id, title }) {
  const dispatch = useDispatch();

  return (
    <div className=" w-80 mx-auto">
      <div className="flex flex-row justify-between items-center border-2 p-2">
        <span className="text-white">{title}</span>
        <div>
          <button
            type="button"
            onClick={() => {
              dispatch(removeitem(id));
            }}
          >
            <BsTrash className="text-3xl text-red-400 mx-3" />
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch(edititem({ id: id, title: title }));
            }}
          >
            <BsFillPencilFill className="text-3xl text-green-300" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
