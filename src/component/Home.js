import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { additem } from "./Redux/TodoSlice";

function Home() {
  const [item, setItem] = useState([]);
  console.log(item);

  const dispatch = useDispatch();
  const handleclick = () => {
    dispatch(additem(item));
    setItem("");
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-white text-6xl font-bold my-10">TodoList</h1>
      <input
        type="text"
        onChange={(e) => setItem(e.target.value)}
        value={item}
        className="bg-white my-2 p-2 w-80"
      />
      <button
        type="button"
        onClick={handleclick}
        className="w-80 bg-gray-500 my-3 p-2 text-white"
      >
        add item
      </button>
    </div>
  );
}

export default Home;
