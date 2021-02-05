import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import MenuItem from '../MenuItem/MenuItem';
import styles from './MenuDropdown.module.css';

const MenuDropdown = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    if (anchorEl == null) {
      setAnchorEl(event.target);
    } else {
      handleClose();
    }
  };
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <button type="button" className={styles.menuItem} onClick={handleClick}>
        <MenuItem>{props.header}</MenuItem>
      </button>
      <Dropdown
        anchorEl={anchorEl}
        onClose={handleClose}
        open={anchorEl != null}
      >
        <div className={styles.dropdown}>{props.children}</div>
      </Dropdown>
    </>
  );
};

export default MenuDropdown;
