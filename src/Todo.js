import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import './Todo.css'

function Todo(props) {
  return (
    <List className='todo__list'>
      <ListItem>
        <ListItemText primary={props.todo} />
      </ListItem>
    </List>
  )
}

export default Todo
