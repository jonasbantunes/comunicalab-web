import React from 'react';

import Menu from '../../../utils/components/Menu';
import Title from '../../../utils/components/Title';
import Toolbar from '../../../utils/components/Toolbar';
import Formulario from './components/Formulario';

export default function RegistrarEquipamento() {
  return (
    <div>
      <Toolbar />
      <Menu />
      <Title title="Registrar Equipamento" />
      <Formulario />
    </div>
  );
}
