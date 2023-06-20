import React from 'react';
import css from './Register.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addContact, listContacts } from 'redux/contactAPI';
import { register } from 'redux/auth/auth-operations';

export default function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(listContacts());
  // }, [dispatch]);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        return setName(value);

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
    dispatch(register({ name: name, email: email, password: password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Registration form</h1>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Name
          <input
            className={css.submit}
            type="text"
            value={name}
            onChange={handleChange}
            name="name"
            placeholder="First Name/Last Name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Mail
          <input
            className={css.submit}
            type="mail"
            value={email}
            onChange={handleChange}
            name="email"
            placeholder="exemple@mail.com"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Please input correct mail. (Exemple: user@mail.com)"
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
            name="password"
            minLength={7}
            autoComplete="current-password"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Minimal length password 7 simbole"
            required
          />
        </label>
        <button
          className={css.button}
          type="submit"
          disabled={!name || !email || !password}
        >
          Registration
        </button>
      </form>
    </div>
  );
}
