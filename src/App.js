import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

class App extends React.Component {
  constructor(props = []) {
    super(props)
    this.state = {
      todos: []
    }
    this.createTodo = this.createTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  createTodo(todo) {
    this.setState(prevState => {
      console.log(prevState)
      return {
        ...prevState,
        todos: [todo, ...prevState.todos]
      }
    })
  }
  
  removeTodo(id) {
    this.setState(prevState => {
      return {
        ...prevState,
        todos: prevState.todos.filter(todo => todo.id != id)
      }
    })
  }

  render() {
    return (
      <div className="App">
        <TodoForm createTodo={this.createTodo} />
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default App;
