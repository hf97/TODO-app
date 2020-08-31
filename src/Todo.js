import React, { useState } from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Button, Modal } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase.js'
import './Todo.css'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    }, {merge: true});
    setOpen(false);
  }

  return (
    <>
    <Modal className='todo__modal'
      open={open}
      onClose={e => setOpen(false)}
    >
      <div className={classes.paper}>
        <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
        <Button onClick={updateTodo} variant='contained' color='default'>Update Todo</Button>
      </div>
    </Modal>

    <List className='todo__list'>
      <ListItemAvatar>
        <ListItemText primary={props.todo.todo} />
      </ListItemAvatar>
      <button onClick={e => setOpen(true)}>Edit</button>
      <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
    </List>
    </>
  )
}

export default Todo
