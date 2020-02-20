import React from 'react';
import SigninForm from './components/SigninForm';

import './styles/index.css';

function Login() {
  return (
    <div className="login">
      <img
        alt="Logo da aplicação 'Comunica Lab' "
        className="loginLogo"
        src={require('../../assets/ComunicaLab.png')}
      />
      <div className="loginVerticalBar" />
      <SigninForm />
    </div>
  );
}

export default Login;
