import React from "react";
import { useSelector } from "react-redux";
import Todo from "../component/Todo.js";

function TodoList() {
  const todolist = useSelector((state) => state.todo.todolist);

  return (
    <div>
      {todolist.map((todo) => {
        return (
          <div className="my-3">
            <Todo {...todo} key={todo.id} />
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
