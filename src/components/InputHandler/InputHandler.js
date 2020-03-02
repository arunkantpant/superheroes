import React from 'react';
import classes from './InputHandler.module.css';

const InputHandler = (props) => {
  return (
    <div className={classes.heroPowersInput}>
      <input type="text" onChange={props.changeHandler} value={props.val} />
    </div>
  );
};

export default InputHandler;