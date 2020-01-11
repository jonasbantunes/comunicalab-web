import React from 'react';
import PropTypes from 'prop-types';
import '../styles/GlobalTitle.css';

function GlobalTitle({ name, itens }) {
  return (
    <div className="globaltitle">
      <div className="backgroundtitle">
        <div className="title">
          <h2 className="nameTitle">{name}</h2>
          <h5 className="itemTitle">{itens}</h5>
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
