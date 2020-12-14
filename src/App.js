import React, { Component } from 'react'
import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        tasks: [
            {
              id: uuidv4(),
              title: 'Wash plates',
              completed: false
            },
            {
              id: uuidv4(), 
              title: 'Wash Car',
              completed: false
            },
            {
             id: uuidv4(), 
             title: 'Wash clothes',
             completed: false
            }
          ]
    }
}

  markComplete = (id) => {
     this.setState({
       tasks : this.state.tasks.map(task => 
        {if (task.id === id){
           task.completed = !task.completed
        }
          return task
        })
     })
  }

  delTodo = (id) => {
    this.setState({
      tasks : [...this.state.tasks.filter(task => task.id !== id)]
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTodo]
    })
  }

  render() {
    // console.log(this.state.tasks)
    return (
      <div>
        <Header />
        <AddTodo addTodo= {this.addTodo} />
        <TodoList todo= {this.state.tasks} markComplete= {this.markComplete} delTodo= {this.delTodo}/>
      </div>
    )
  }
}

export default App
