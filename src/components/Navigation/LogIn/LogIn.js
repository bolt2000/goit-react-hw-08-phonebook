import React from 'react';
import css from './LogIn.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();



  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
       return setEmail(value);


      case 'password':
       return setPassword(value);


      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email: email, password: password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Enter in account</h1>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="email">
        <label className={css.label}>
          Mail
          <input
            className={css.submit}
            type="email"
            value={email}
            onChange={handleChange}
            name="email"
            placeholder="exemple@mail.com"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name current mail"
            required
          />
        </label>

        <label className={css.label}>
          Password
          <input
            className={css.submit}
            type="password"
            value={password}
            onChange={handleChange}
            autoComplete="current-password"
            name="password"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="No correct password"
            required
          />
        </label>
        <button
          className={css.button}
          type="submit"
          // disabled={!email || !password}
        >
          Enter
        </button>
      </form>
    </div>
  );
}
