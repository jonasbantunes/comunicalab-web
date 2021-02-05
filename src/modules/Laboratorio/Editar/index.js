import React from 'react';
import Menu from '../../../shared/components/Menu/Menu';
import Title from '../../../shared/components/Title/Title';
import Toolbar from '../../../shared/components/Toolbar/Toolbar';
import Formulario from './components/Formulario';

function Editar() {
  return (
    <div>
      <Toolbar />
      <Menu />
      <Title title="Editar Laboratório" subTitle="Laboratório 01" />
      <Formulario />
    </div>
  );
}

export default Editar;
