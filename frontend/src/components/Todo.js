import React, { PropTypes } from 'react';
import { Input } from 'react-bootstrap';
import { toggleTodo } from '../actions/ActionCreators';
const Todo = props => (
  <Input
    type="checkbox"
    label={ props.text }
    onChange ={ props.onChangeMethod }
    checked={ props.done }
    id ={props.id}
  />
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onChangeMethod: PropTypes.func.isRequired,
};



export default Todo;
