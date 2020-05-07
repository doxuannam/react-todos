import React from 'react';

export default ({ todos }) => (
    <div className="todos">
        {
            todos.map(todo => (
                <li key={todo.id}>{todo.name}</li>
            ))
        }
    </div>
);