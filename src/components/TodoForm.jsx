import { Button, TextField } from '@material-ui/core'
import { v4 as uuid } from 'uuid'

function TodoForm(props) {
  function onSubmit(e) {
    e.preventDefault()
    let todo = {
      id: uuid(),
      task: e.target.querySelector('[name="task"]').value,
      completed: false
    }
    props.createTodo(todo)
  }

  return (
    <form onSubmit={onSubmit}>
      <TextField name="task" />
      <Button>Submit</Button>
    </form>
  );
} 

export default TodoForm;
