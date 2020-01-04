import React from 'react';
import GlobalToolbar from '../../utils/components/GlobalToolbar';
import GlobalMenu from '../../utils/components/GlobalMenu';
import GlobalTitle from '../../utils/components/GlobalTitle';

export default function ListarEquipamento() {
  return (
    <div>
      <GlobalToolbar />
      <GlobalMenu />
      <GlobalTitle name="Listar Equipamento" />
    </div>
  );
}
