import React, { Component } from 'react'
import TodoItems from './TodoItems'
import PropTypes from 'prop-types'

class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.todo.map(task => <TodoItems key={task.id} todos= {task} markComplete= {this.props.markComplete} delTodo= {this.props.delTodo}/>)}
            </div>
        )
    }
}


TodoList.propTypes = {
    todo: PropTypes.array.isRequired
}
export default TodoList
