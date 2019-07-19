import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {handleAdd: (id) => {console.log(id)}}
  ReactDOM.render(<AddTodo {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});