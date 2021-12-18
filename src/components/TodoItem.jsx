import React from 'react'
import { ListItem, Checkbox, IconButton, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      completed: props.todo.completed
    }
    this.checkCompleteCheckbox = this.checkCompleteCheckbox.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  checkCompleteCheckbox(e) {
    this.setState(prevState => {
      return {
        ...prevState,
        completed: !this.state.completed
      }
    })
  }

  removeTodo(e) {
    this.props.removeTodo(this.props.todo.id)
  }

  render() {
    return (
      <ListItem key={this.props.todo.id}>
        <Checkbox checked={this.state['completed']} onClick={this.checkCompleteCheckbox} />
        <Typography>
          {this.props.todo.task}
        </Typography>
        <IconButton onClick={this.removeTodo}>
          <CloseIcon />
        </IconButton>
      </ListItem>
    );
  }
} 

export default TodoItem;
