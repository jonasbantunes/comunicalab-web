import React from 'react';
import OsImageListItem from '../OsImageListItem/OsImageListItem';
import styles from './OsImageList.module.css';
import PropTypes from 'prop-types';

const OsImageList = (props) => {
  const imagesList = props.osImages.map((osImage) => (
    <OsImageListItem key={osImage.id} osImage={osImage} />
  ));

  return <div className={styles.wrapper}>{imagesList}</div>;
};

OsImageList.propTypes = {
  osImages: PropTypes.array.isRequired,
};

export default OsImageList;
