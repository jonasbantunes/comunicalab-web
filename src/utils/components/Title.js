import React from 'react';

import PropTypes from 'prop-types';
import '../styles/Title.css';

function Title({ title, subTitle }) {
  return (
    <div className="title">
      <div className="titleBackground">
        <div className="titleInfo">
          <h2 className="titleTitle">{title}</h2>
          <h5 className="titleSubTitle">{subTitle}</h5>
        </div>
      </div>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

Title.defaultProps = {
  title: '',
  subTitle: '',
};

export default Title;
