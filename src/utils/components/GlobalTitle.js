import React from 'react';
import PropTypes from 'prop-types';
import '../styles/GlobalTitle.css';

function GlobalTitle({ name }) {
  return (
    <div className="globaltitle">
      <div className="backgroundtitle">
        <div className="title">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}

GlobalTitle.propTypes = {
  name: PropTypes.string,
};

GlobalTitle.defaultProps = {
  name: '',
};

export default GlobalTitle;
