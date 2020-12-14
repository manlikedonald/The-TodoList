import React, { Component } from 'react'

class AddTodo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    
    submitForm = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ''
        })
    }

    render() {
        const {title} = this.state
        return (
            <div className= 'addTodo'>
                <form onSubmit= {this.submitForm}>
                    <input type='text' className='addTodoInput' placeholder= 'Add Todo...' value= {title} onChange= {this.handleChange}/>
                    <button type='button' style= {{backgroundColor: '#2E2E2E', color: '#fff', outline: 'none'}}>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodo
