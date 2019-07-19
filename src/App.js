import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash Video at 53:00',
        completed: true
      },
      {
        id: 2,
        title: 'Dinner with Wife',
        completed: false
      },
      {
        id: 3,
        title: 'Study exam',
        completed: true
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(
        todo => {
          if (todo.id === id) {
            todo.complete = !todo.completed
          }
          return todo;
        })
    });
  }

  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">

        <Todos todos={this.state.todos} markComplete={this.markComplete} />

      </div>
    );
  }
}
export default App;
