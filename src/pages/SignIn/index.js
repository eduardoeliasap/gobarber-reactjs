import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; // useDispatch to shoot actions
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// It is the function that the login component has to trigger for Saga to hear it and perform the authentication process
import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSumit({ email, password }) {
    dispatch(signInRequest(email, password));
    // console.tron.log(data);
  }

  // function handleSumit(data) {
  //   console.tron.log(data);
  // }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSumit}>
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit"> {loading ? 'Carregando...' : 'Acessar'} </button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
