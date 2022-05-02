import React, { useState } from "react";

export const TodoItem = ({ todo, OnDelete }) => {
  const [isSelected, setSelected] = useState(todo.isSelected);

  const onChange = () => {
    todo.isSelected = !isSelected;
    setSelected(!isSelected);
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <label>
        <input
          type="checkbox"
          className="checkbox"
          onChange={onChange}
          checked={isSelected}
        />
      </label>
      <div
        style={{ display: "flex", flexDirection: "column", marginLeft: "2%" }}
      >
        <h4
          style={{
            textDecoration: todo.complete ? "line-through" : "none",
            color: todo.onGoing ? "green" : "black",
          }}
        >
          {todo.title}
        </h4>
        <p> {todo.desc}</p>
      </div>
      <button
        style={{ margin: "5%" }}
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
