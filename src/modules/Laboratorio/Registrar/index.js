import React from 'react';
import Menu from '../../../shared/components/Menu/Menu';
import Title from '../../../shared/components/Title/Title';
import Toolbar from '../../../shared/components/Toolbar/Toolbar';
import Formulario from './components/Formulario';

function Registrar() {
  return (
    <div>
      <Toolbar />
      <Menu />
      <Title title="Registrar Laboratório" />
      <Formulario />
    </div>
  );
}

export default Registrar;
