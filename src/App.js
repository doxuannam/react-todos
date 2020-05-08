import React from 'react';
import './App.css';

import Header from './components/Layouts/Header';
// import TodoList from './components/TodoList';
import Login from './components/Auth/LoginForm';

function App() {
  const state = {
    todos: [
      { id: 1, name: 'Đi chợ' },
      { id: 2, name: 'Nâú cơm' },
      { id: 3, name: 'Học bài' },
    ]
  };

  return (
    <div className="App">
        <Header />
        <Login />
        {/* <TodoList todos={state.todos} /> */}
    </div>
  );
}

export default App;
