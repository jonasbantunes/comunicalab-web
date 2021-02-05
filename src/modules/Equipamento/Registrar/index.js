import React from 'react';
import Menu from '../../../shared/components/Menu/Menu';
import Title from '../../../shared/components/Title/Title';
import Toolbar from '../../../shared/components/Toolbar/Toolbar';
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
