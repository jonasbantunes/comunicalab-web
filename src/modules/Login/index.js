import React from 'react';
import SigninForm from './components/SigninForm';

import './styles/index.css';
import './styles/loginScreen.css';

function Login() {
  return (
    <div>
      <img
        alt="Logo da aplicação 'Comunica Lab' "
        className="logo"
        src={require('../../assets/ComunicaLab.png')}
      />
      <div className="verticalBar" />
      <SigninForm />
    </div>
  );
}

export default Login;
