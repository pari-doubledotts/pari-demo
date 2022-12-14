import React, { useState ,useEffect,  useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.val , isvalid: action.val.includes('@')};
  }
  if(action.type === 'INPUT_BLUR'){
    return {value: state.value , isvalid: state.value.includes('@')};
  }
  return {value: '' , isvalid: false};
};

const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.val ,isvalid: action.val.trim().length > 6};
  }    
  if(action.type === 'INPUT_BLUR'){
    return {value: state.value ,isvalid: state.value.trim().length > 6};
  }
  return {value: '',isvalid: false};
}

const Login = (props) => {
  //const [enteredEmail, setEnteredEmail] = useState('');
  //const [emailIsValid, setEmailIsValid] = useState();
  //const [enteredPassword, setEnteredPassword] = useState('');
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const[emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isvalid: null});
  const[passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '',isvalid: null});
// useeffect 1
  useEffect(()=>{
    console.log('EFFECT RUNNING');
    return () => {
      console.log('EFFECT CLEANUP');
    }
  }, []);

  // useeffect 2

  //object Destcturing

  const {isvalid : emailIsValid} = emailState;
  const {isvalid : passwordIsValid} = passwordState;

  useEffect(() => {
    const identifier = setTimeout(()=>{
      console.log('check');
    setFormIsValid(
      emailIsValid && passwordIsValid
    );
    }, 500);
  
    return()=>{
      console.log('cleanup');
      clearTimeout(identifier);
    }
  }, [emailIsValid,passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
    // setFormIsValid(
    //       event.target.value.includes('@') && passwordState.isvalid
    //     );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});
    // setFormIsValid(
    //   emailState.isvalid && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    //setEmailIsValid(emailState.isvalid );
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(passwordState.isvalid);
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isvalid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isvalid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
