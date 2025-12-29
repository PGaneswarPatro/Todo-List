import React, { useState } from "react";

const TodoItem = (props) => {
  const { todo, handleDelete, handleEditText } = props;
  const [editText, setEditText] = useState("");
  const [EditId, setEditId] = useState(null);

  const handleEdit = (id, newItem) => {
    setEditText(newItem);
    setEditId(id);
  };

  const saveEditText = () => {
    handleEditText(EditId, editText);
    alert(`saved ${editText}`);
    setEditText("");
    setEditId(null);
  };

  return (
    <div>
      <ul>
        {todo.map((ele) => (
          <li key={ele.id}>
            {EditId === ele.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={saveEditText}>Save</button>
              </>
            ) : (
              <>
                <span>{ele.title}</span>
                <button onClick={() => handleEdit(ele.id, ele.title)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(ele.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoItem;
