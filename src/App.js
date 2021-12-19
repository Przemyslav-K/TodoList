import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
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
    this.storeTodos = this.storeTodos.bind(this)
  }

  createTodo(todo) {
    this.setState(prevState => {
      return {
        ...prevState,
        todos: [todo, ...prevState.todos]
      }
    })
    this.storeTodos()
  }
  
  removeTodo(id) {
    this.setState(prevState => {
      return {
        ...prevState,
        todos: prevState.todos.filter(todo => todo.id !== id)
      }
    })
    this.storeTodos()
  }

  storeTodos() {
    this.useEffect(() => {
      localStorage.setItem('todos', this.state.todos)
    }, [this.state.todos])
  }

  render() {
    return (
      <div className="App">
        <Typography variant="h1">
          Todo List
        </Typography>
        <TodoForm createTodo={this.createTodo} />
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default App;
