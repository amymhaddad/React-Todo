import React from 'react';

class Todo extends React.Component {
       handleRemove = () => {
            this.props.onRemoveTodo(this.props.id)
       }

    render() {
        const taskName = this.props.task;
        
        return (
            <>
             <div >{taskName} </div>
             <button
                 onClick={this.handleRemove} 
                >Remove Todo</button>
            </>
        )
    }
}

export default Todo;