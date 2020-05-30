import React from 'react';
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

class App extends React.Component {
  increment = 0
  state = {
    todos: []
  };

   handleSubmit = (newTodo) => {  
    newTodo.id = this.increment += 1

    this.setState((state) => ({
      todos: [...state.todos, newTodo]
     }));     
  }

  handleOnClick = (removeTodo) => { 
    const updateTodos = this.state.todos.filter(todo => todo.id != removeTodo)

    this.setState((state, props) => ({
      todos: updateTodos
     }));     
} 
  render() {
    return (
      <div>
       <TodoList 
          todos={this.state.todos}
          onRemoveTodo={this.handleOnClick}
        />
       <TodoForm 
          onChildSubmit={this.handleSubmit}
          />
      </div>
    );
  }
}

export default App;