import React,{useState} from "react";


export const TodoItem = ({ todo, OnDelete }) => {
  const [isSelected,setSelected]=useState(todo.isSelected)
  return (
    <div>
      <label for="checkbox" >
      <input type="checkbox" class="checkbox" />
      </label>
      <h4>{todo.title}</h4>
      <p> {todo.desc}</p>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={() => {
          OnDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};
