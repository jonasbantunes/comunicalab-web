import React from 'react';

import Menu from '../../../utils/components/Menu';
import Title from '../../../utils/components/Title';
import Toolbar from '../../../utils/components/Toolbar';
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
