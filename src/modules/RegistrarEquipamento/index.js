import React from 'react';
import GlobalToolbar from '../../utils/components/GlobalToolbar';
import GlobalMenu from '../../utils/components/GlobalMenu';
import GlobalTitle from '../../utils/components/GlobalTitle';
import Form from './components/Form';

export default function RegistrarEquipamento() {
  return (
    <div>
      <GlobalToolbar />
      <GlobalMenu />
      <GlobalTitle name="Registrar Equipamento" />
      <Form />
    </div>
  );
}
