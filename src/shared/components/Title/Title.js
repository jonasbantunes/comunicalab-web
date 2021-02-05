import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

function Title({ title, subTitle }) {
  return (
    <div className={styles.background}>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subTitle}</h3>
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
