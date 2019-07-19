import React, {useState} from 'react';
import './index.css'


const AddTodo = ({handleAdd}) => {
  const [todo, setTodo] = useState('')
  return (<div className="todo__wrapper">
    <p className="todo__title">TODO's LIST</p>
    <input placeholder="NEW TODOS" className="todo__input" value={todo} onChange={e => setTodo(e.target.value)}/>
    <button className="todo__button" onClick={() => {
      handleAdd({todo, time: 1, id: new Date().getTime()})
      setTodo('')
    }}>ADD NEW TODO</button>
  </div>)
};

export default AddTodo
