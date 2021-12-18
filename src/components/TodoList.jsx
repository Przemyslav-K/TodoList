import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: props.todos
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(prevState => {
      return {
        ...prevState,
        todos: nextProps.todos
      } 
    });  
  }

  render() {
    return (
      <ul>
        {this.state.todos.map(todo => <TodoItem todo={todo} removeTodo={this.props.removeTodo} />)}
      </ul>
    );
  }
} 

export default TodoList;
