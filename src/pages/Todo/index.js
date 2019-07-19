import React from 'react';
import AddTodo from '../../components/AddTodo'
import Loading from '../../components/Loading'
import {connect} from "react-redux"
import TodoCard from '../../components/TodoCard';
import './index.css'
import * as todoActions from '../../store/ducks/todo'
import * as loadingActions from '../../store/ducks/loading'

const TodoPage = ({modules, addTodo, deleteTodo, editTodo}) => 
    <div>
      <Loading/>
      <AddTodo handleAdd={addTodo}/>
      {modules.map(module => <TodoCard module={module} deleteTodo={deleteTodo} editTodo={editTodo}/>)}
    </div>

 
const mapStateToProps = state => ({
   modules: state.todo,
   user: state.user
})

const mapDispatchToProps = dispatch => ({...todoActions.actions(dispatch),...loadingActions.actions(dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
