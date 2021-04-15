import { FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';

interface Props {
  user?: string;
}

const SignUp: FunctionalComponent<Props> = () => {
  return (
    <div class={style.signup}>
      <div>Sign Up</div>
      <input type='email' placeholder='Email' />
      <input type='password' placeholder='Password' />
    </div>
  );
};

export default SignUp;
