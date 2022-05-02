import "./App.css";
import { Header } from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from "react";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const OnDelete = (todo) => {
    console.log("I am onDelete of todo", todo);

    setTodos(todolist.filter((e) => e !== todo));
    console.log("deleted", todolist);
    localStorage.setItem("todos", JSON.stringify(todolist));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todolist.length === 0) {
      sno = 0;
    } else {
      sno = todolist[todolist.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      isSelected: false,
      onGoing: false,
      complete: false,
    };
    setTodos([...todolist, myTodo]);
    console.log(myTodo);
  };

  const complete = (title, desc) => {
    updateListItem(
      todolist.filter((item) => {
        if (item.isSelected === true) item.complete = true;
      })
    );
    console.log(todolist);
  };

  const onGoing = (title, desc) => {
    updateListItem(
      todolist.filter((item) => {
        if (item.isSelected === true) item.onGoing = true;
      })
    );
    console.log(todolist);
  };

  const [todolist, setTodos] = useState(initTodo);
  const [listItem, updateListItem] = useState("");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todolist));
  }, [todolist]);
  // const [todolist, setTodos] = useState([
  //   {
  //     sno: 1,
  //     title: "Go to the market",
  //     desc: "Go to the market and get the work done",
  //   },
  //   {
  //     sno: 2,
  //     title: "Go to the mall",
  //     desc: "Go to the mall and buy a dress",
  //   },
  //   {
  //     sno: 3,
  //     title: "Complete the assignments",
  //     desc: "Complete all the subjects assignments by Monday",
  //   },
  //   {
  //     sno: 4,
  //     title: "Study for the UT",
  //     desc: "Prepare for the UTs of the college",
  //   },
  // ]);
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos
        todolist={todolist}
        OnDelete={OnDelete}
        complete={complete}
        Ongoing={onGoing}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <button
          type="button"
          className="btn btn-success btn-sm"
          onClick={complete}
        >
          Complete
        </button>

        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={onGoing}
        >
          OnGoing
        </button>
      </div>
    </>
  );
}

export default App;
