import React, { useState } from "react";
// import { Container } from './styles';
import './index.css'
import { IoMdClose, IoMdCreate } from 'react-icons/io';

const TodoCard = ({ module, editTodo, deleteTodo }) => {
  const [edit, setEdit] = useState(false);
  const [todo, setTodo] = useState("");

  return !edit ? (
        <div className="todo__card">
          <p className="todo__title">{module.todo}</p>
          <div className="todo__button-wrapper">
            <button
              className="todo__delete"
              onClick={() =>
                deleteTodo(module.id)
              }
            >
              <IoMdClose color="#2558f0"></IoMdClose>
            </button>
            <button
              className="todo__edit"
              onClick={() => {
                setEdit(!edit);
                setTodo(module.todo);
              }}
            >
              <IoMdCreate color="#2558f0"></IoMdCreate>
            </button>
          </div>
        </div>
      ) : (
        <div className="todo__card">
          <input className="todo__input-edit" value={todo} onChange={e => setTodo(e.target.value)} />
          <button
            className="todo_edit-button"
            onClick={() => {
              editTodo({...module, todo})
              setEdit(false);
            }}
          >
            Editar
          </button>
        </div>
      )
};

export default TodoCard;
