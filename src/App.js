import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

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
        <TodoList todos={state.todos} />
    </div>
  );
}

export default App;
