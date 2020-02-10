import React from 'react';
import SigninForm from './components/SigninForm';

import './styles/index.css';
import './styles/loginScreen.css';

const Login = () => (
  <div>
    <img alt="Logo da aplicação 'Comunica Lab' " className="logo" src={require('../../assets/ComunicaLab.png')} />
    <div className="verticalBar" />
    {/* Form */}
    {/* <Form /> */}
    <SigninForm />
  </div>
);

export default Login;
