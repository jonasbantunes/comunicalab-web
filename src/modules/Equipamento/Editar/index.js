import React from 'react';

import Menu from '../../../utils/components/Menu';
import Title from '../../../utils/components/Title';
import Toolbar from '../../../utils/components/Toolbar';
import Formulario from './components/Formulario';

function Editar() {
  return (
    <div>
      <Toolbar />
      <Menu />
      <Title title="Editar Equipamento" subTitle="Equipamento 01" />
      <Formulario />
    </div>
  );
}

export default Editar;
