import React from 'react';
import PropTypes from 'prop-types';
import '../styles/GlobalTitle.css';

function GlobalTitle({ name, itens }) {
  return (
    <div className="globaltitle">
      <div className="globaltitleBackground">
        <div className="globaltitleTitle">
          <h2 className="globaltitleName">{name}</h2>
          <h5 className="globaltitleItem">{itens}</h5>
        </div>
      </div>
    </div>
  );
}

GlobalTitle.propTypes = {
  name: PropTypes.string,
  itens: PropTypes.string,
};

GlobalTitle.defaultProps = {
  name: '',
  itens: '',
};

export default GlobalTitle;
