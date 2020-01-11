import React from 'react';
import GlobalToolbar from '../../utils/components/GlobalToolbar';
import GlobalMenu from '../../utils/components/GlobalMenu';
import GlobalTitle from '../../utils/components/GlobalTitle';
import Equipamento from './components/Equipamento';

import './styles/index.css';

export default function ListarEquipamento() {
  return (
    <div>
      <GlobalToolbar />
      <GlobalMenu />
      <GlobalTitle name="Listar Equipamento" itens="(6 itens)" />
      <div className="listaEquipamentos">
        <Equipamento
          nome="Equipamento 1"
          categoria="Categoria"
          statusUsoCor="UsoVerde"
          statusUso="Em uso"
          statusEquipamentoCor="UsoVermelho"
          statusEquipamento="Sem Rede"
        />
        <Equipamento
          nome="Equipamento 1"
          categoria="Categoria"
          statusUsoCor="UsoVerde"
          statusUso="Em uso"
          statusEquipamentoCor="UsoVermelho"
          statusEquipamento="Sem Rede"
        />
        <Equipamento
          nome="Equipamento 1"
          categoria="Categoria"
          statusUsoCor="UsoVerde"
          statusUso="Em uso"
          statusEquipamentoCor="UsoVermelho"
          statusEquipamento="Sem Rede"
        />
        <Equipamento
          nome="Equipamento 1"
          categoria="Categoria"
          statusUsoCor="UsoVerde"
          statusUso="Em uso"
          statusEquipamentoCor="UsoVermelho"
          statusEquipamento="Sem Rede"
        />
        <Equipamento
          nome="Equipamento 1"
          categoria="Categoria"
          statusUsoCor="UsoVerde"
          statusUso="Em uso"
          statusEquipamentoCor="UsoVermelho"
          statusEquipamento="Sem Rede"
        />
        <Equipamento
          nome="Equipamento 1"
          categoria="Categoria"
          statusUsoCor="UsoVerde"
          statusUso="Em uso"
          statusEquipamentoCor="UsoVermelho"
          statusEquipamento="Sem Rede"
        />
        <Equipamento
          nome="Equipamento 1"
          categoria="Categoria"
          statusUsoCor="UsoVerde"
          statusUso="Em uso"
          statusEquipamentoCor="UsoVermelho"
          statusEquipamento="Sem Rede"
        />
      </div>
    </div>
  );
}
