
import React from 'react';
import Todo from "./Todo";

class TodoList extends React.Component{
    render() {
        const newTodo = this.props.todos;
        return (
            <div>
                {newTodo.map(todo => (    
                    <Todo 
                        key={todo.id}
                        id={todo.id} 
                        task={todo.task} 
                        onRemoveTodo={this.props.onRemoveTodo}
                    />
                ))}
            </div>
        )
    }
}
export default TodoList;