import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Equipamento.css';

function Equipamento({
  nome,
  categoria,
  statusUsoCor,
  statusUso,
  statusEquipamentoCor,
  statusEquipamento,
}) {
  return (
    <div className="equipamento">
      <div className="equipamentoNome">
        <h1>{nome}</h1>
      </div>
      <button type="submit"> </button>
      <div className="equipamentoCategoria">
        <h1>{categoria}</h1>
      </div>
      <div className="equipamentoStatus">
        <div className="equipamentoStatusUso">
          <div className={statusUsoCor} />
          <h2>
            <b>Status de Uso:</b>
          </h2>
          <h2>{statusUso}</h2>
        </div>
        <div className="equipamentoStatusEquipamento">
          <div className={statusEquipamentoCor} />
          <h2>
            <b>Status do Equipamento:</b>
          </h2>
          <h2>{statusEquipamento}</h2>
        </div>
      </div>
    </div>
  );
}

Equipamento.propTypes = {
  nome: PropTypes.string,
  categoria: PropTypes.string,
  statusUsoCor: PropTypes.string,
  statusUso: PropTypes.string,
  statusEquipamentoCor: PropTypes.string,
  statusEquipamento: PropTypes.string,
};

Equipamento.defaultProps = {
  nome: '',
  categoria: '',
  statusUsoCor: '',
  statusUso: '',
  statusEquipamentoCor: '',
  statusEquipamento: '',
};

export default Equipamento;
