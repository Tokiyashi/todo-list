import Container from "./styles/Container";
import {addUser, checkIsUserExist, fetchUser} from "@/utils/firebase/userStorage.ts";
import {Alert, Button, Snackbar, TextField} from "@mui/material";
import {useTranslation} from "react-i18next";
import {ChangeEvent, useState} from "react";
import {store} from "@/utils/store";
import {setUser} from "@/utils/store/slices/userSlices.ts";

const Form = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const {t} = useTranslation()
  const [errorMessage, setErrorMessage] = useState('')

  async function handleLogin() {
    const result = await fetchUser({name, password});
    setName('');
    setPassword('');

    if (!result) {
      setErrorMessage('Incorrect login or password')
      return
    }
    localStorage.setItem('userId', result.id)
    store.dispatch(setUser(result))

  }

  async function handleSignIn() {
    if (!name || !password) {
      return
    }

    const isAlreadyExist = await checkIsUserExist({name, password})

    if (isAlreadyExist) {
      setName('');
      setPassword('');
      setErrorMessage('User with this name is already exist!')
      return
    }

    await addUser({name, password})
    await handleLogin();
  }


  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  return (
    <Container>
      <TextField
        inputProps={{maxLength: 40}}
        label={t('Your Name')}
        value={name}
        type='name'
        onChange={handleNameChange}
      />
      <TextField
        onChange={handlePasswordChange}
        inputProps={{maxLength: 40}}
        type='password'
        value={password}
        label={t('Password')}
      />
      <Button variant='contained' onClick={handleLogin}>{t('Log in')}</Button>
      <Button variant='outlined' onClick={handleSignIn}>{t('Sign in')}</Button>
      <Snackbar
        open={!!errorMessage}
        autoHideDuration={6000}
        onClose={() => setErrorMessage('')}
        color='error'
      >
        <Alert severity='error'>
          {t(errorMessage)}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Form;