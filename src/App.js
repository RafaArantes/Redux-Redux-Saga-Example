import React from 'react';
import {Provider} from "react-redux"

import TodoPage from './pages/Todo';

import store from './store';

const App = () =>  (
      <Provider store={store}>
        <TodoPage/>
      </Provider>
    )

export default App 