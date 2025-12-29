import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [text, setText] = useState();
  const [todo, setTodo] = useState([]);

  function handleChange(event) {
    setText(event.target.value);
  }

  const handleSubmit = () => {
    let newItem = {
      title: text,
      id: new Date().toDateString() + text,
    };
    setTodo([...todo, newItem]);
    setText("");
  };

  const handleDelete = (id) => {
    const afterDelete = todo.filter((ele, index) => {
      return ele.id != id;
    });
    setTodo(afterDelete);
  };

  const handleEditText = (id, newItem) => {
    let updateTitle = todo.map((ele) => {
      if (ele.id == id) {
        return { ...ele, title: newItem };
      }
      return ele;
    });
    setTodo(updateTitle);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleSubmit}>submit</button>

      <TodoItem
        todo={todo}
        handleDelete={handleDelete}
handleEditText={handleEditText}
      />
    </div>
  );
};

export default TodoList;
