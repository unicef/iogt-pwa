import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';

interface Props {
  option?: string;
}

const Login = () => (
  <div>
    <h1 class={style.mobileTag}>Already a member?</h1>
    <h1 class={style.mobileHeader}>Login by signing in below.</h1>
    <form class={style.form}>
      <div>
        <label for='username'>USERNAME</label>
        <input type='text' id='username' name='username' />
      </div>
      <div>
        <label for='pass'>4-DIGIT PIN</label>
        <input type='password' id='pass' name='password' />
      </div>

      <button class={style.button} type='submit'>
        Sign In
      </button>
    </form>
    <div class={style.bottom}>
      <Link class={style.link} href='/account/register'>
        New User? Register Here
      </Link>
    </div>
  </div>
);

const Register = () => (
  <div>
    <h1 class={style.mobileTag}>Not a member yet?</h1>
    <h1 class={style.mobileHeader}>Join us by signing up below.</h1>
    <form class={style.form}>
      <div>
        <label for='username'>CHOOSE A USERNAME</label>
        <input type='text' id='username' name='username' />
        <label for='username'>
          This name you will use to log in and won't appear to other users. Only
          you will see this.
        </label>
      </div>
      <div>
        <label for='birthdate'>SELECT DATE OF BIRTH.</label>
        <input
          type='number'
          min='1900'
          max='2099'
          step='1'
          id='birthdate'
          name='birthdate'
        />
        <label for='birthdate'>
          Let us know your birth year to get access to exclusive content.
        </label>
      </div>
      <div>
        <label for='gender'>I IDENTIFY MY GENDER AS</label>
        <select id='gender' name='gender'>
          <option value=''>--Please choose an option--</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='transgender'>Transgender</option>
          <option value='non-binary'>Non-binary</option>
          <option value='other'>Other</option>
        </select>
        <label for='gender'>Only you will see this.</label>
      </div>
      <div>
        <label for='address'>WHERE DO YOU LIVE?</label>
        <input type='text' id='address' name='address' />
        <label for='address'>Only you will see this.</label>
      </div>
      <div>
        <label for='pass'>CHOOSE A 4-DIGIT PIN</label>
        <input type='password' id='pass' name='password' />
        <label for='pass'>e.g. 1234</label>
      </div>
      <div class={style.checkbox} style={{ margin: '20px 0px' }}>
        <input type='checkbox' id='horns' name='horns' />
        <label for='horns' style={{ paddingLeft: 5 }}>
          <Link class={style.link}>I accept the terms and conditions</Link>
        </label>
      </div>

      <button class={style.button} type='submit'>
        Join
      </button>
    </form>
    <div class={style.bottom}>
      <Link class={style.link} href='/account/signin'>
        Have an account? Log in
      </Link>
    </div>
  </div>
);

const SignIn: FunctionalComponent<Props> = ({ option }) => {
  console.log(option);
  return (
    <div class={style.signupContainer}>
      {option === 'signin' && <Login />}
      {option === 'register' && <Register />}
    </div>
  );
};

export default SignIn;
