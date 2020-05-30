import React from 'react';

class TodoForm extends React.Component{
    state = {
            todo: {
                task: '', 
                completed: false
            }  
          }

    handleAddTodo = (event) => {
        const updatedTodo = {...this.state.todo, task: event.target.value}
        this.setState({todo: updatedTodo});
    }

    handleFormSubmit = (event) => { 
        event.preventDefault(); 
        this.props.onChildSubmit(this.state.todo)

        this.setState({
            todo: {
                task: '', 
                completed: false
            }  
        })
    }

    render() { 
        const {task} = this.state.todo;

        return (  
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label>
                        Todo: 
                        <input 
                            type="text" 
                            name="task"
                            value={task}
                            onChange={this.handleAddTodo}
                            className="form-control"
                        />
                    </label>
                </div>
           
            <input 
                type="submit" 
                value="Add todo" 
                className="btn" 
            />
        </form>
        );
    }
}
export default TodoForm;