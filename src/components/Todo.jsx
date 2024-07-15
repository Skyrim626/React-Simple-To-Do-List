import React, { useState } from "react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

export default function Todo({ title, priorityLevel, isChecked = false }) {
  // use State for check
  const [isCheck, setIsCheck] = useState(isChecked);

  const onHandleCheck = (ev) => {
    console.log(ev.target.checked);

    if (ev.target.checked) {
      setIsCheck(true);
      console.log("Set to true");
    } else {
      setIsCheck(false);
      console.log("Set to false");
    }
  };

  // Checkbox CSS Style
  const checkBoxStyle = ["p-3", "w-6", "h-6", "cursor-pointer"];

  // Level CSS Style
  const priorityClass = [
    "p-2",
    "px-3",
    "cursor-pointer",
    "focus:outline-none",
    "rounded-full",
    "text-gray-200",
    "font-bold",
  ];

  return (
    <div
      className={
        isCheck
          ? "flex justify-between items-center bg-gray-400 p-3 rounded-md"
          : "flex justify-between items-center bg-gray-800 p-3 rounded-md"
      }
    >
      <div className="prefix flex items-center space-x-2">
        {isChecked ? (
          <input
            type="checkbox"
            className={checkBoxStyle.join(" ")}
            onChange={(ev) => onHandleCheck(ev)}
            checked
          />
        ) : (
          <input
            type="checkbox"
            className={checkBoxStyle.join(" ")}
            onChange={(ev) => onHandleCheck(ev)}
          />
        )}
        <p className="text-gray-200 font-bold">{title}</p>
      </div>

      <div className="suffix space-x-5 flex items-center">
        {priorityLevel === "High" && (
          <>
            <select
              name=""
              id=""
              className="bg-red-600 p-2 px-3 cursor-pointer focus:outline-none rounded-full text-gray-200 font-bold"
            >
              <option value="High">High Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="Low">Low Priority</option>
            </select>
          </>
        )}
        {priorityLevel === "Medium" && (
          <>
            <select
              name=""
              id=""
              className="bg-yellow-200 p-2 px-3 cursor-pointer focus:outline-none rounded-full text-black font-bold"
            >
              <option value="Medium">Medium Priority</option>
              <option value="High">High Priority</option>
              <option value="Low">Low Priority</option>
            </select>
          </>
        )}
        {priorityLevel === "Low" && (
          <>
            <select
              name=""
              id=""
              className="bg-green-600 p-2 px-3 cursor-pointer focus:outline-none rounded-full text-gray-200 font-bold"
            >
              <option value="Low">Low Priority</option>
              <option value="High">High Priority</option>
              <option value="Medium">Medium Priority</option>
            </select>
          </>
        )}

        <button className="focus:outline-none">
          <FaTrash className="w-5 h-5 transition text-red-600 hover:text-red-700" />
        </button>
        <a href="#" className="focus:outline-none">
          <FaEdit className="w-5 h-5 transition text-green-300 hover:text-green-400" />
        </a>
      </div>
    </div>
  );
}
