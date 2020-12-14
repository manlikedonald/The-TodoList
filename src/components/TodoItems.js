import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItems extends Component {

    getStyle = () => {
        return {
        textDecoration: this.props.todos.completed ? 'line-through' : 'none',
        backgroundColor: '#F3F2F3',
        margin: '-15px 400px'}
    }


    render() {
        const delButton = {
            backgroundColor: 'red',
            borderRadius: '50%',
            color: '#fff',
            float: 'right',
            padding: '1px 2px',
            fontSize: '10px'
        }
        const task = this.props.todos
        const {id, title} = task
        return (
            <div style= {this.getStyle()}>
                
                <h3>
                    <input type= 'checkbox' onClick= {this.props.markComplete.bind(this, id)} /> {' '}
                    {title}
                    <button style= {delButton} onClick= {this.props.delTodo.bind(this, id)} >X</button>
                </h3>
            </div>
        )
    }
}

TodoItems.propTypes = {
    todos: PropTypes.object.isRequired
}
export default TodoItems
