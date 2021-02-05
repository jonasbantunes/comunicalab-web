import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Dropdown = (props) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        props.open &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        props.onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [props]);

  if (!props.open || props.anchorEl == null) {
    return null;
  } else {
    const dimensions = props.anchorEl.getBoundingClientRect();

    return (
      <div
        ref={wrapperRef}
        style={{
          position: 'absolute',
          top: dimensions.y + 10,
          left: props.align === 'right' ? dimensions.x : undefined,
          right:
            props.align === 'left'
              ? `calc(100% - ${dimensions.x + dimensions.width}px)`
              : undefined,
          zIndex: 1,
        }}
      >
        {props.children}
      </div>
    );
  }
};

Dropdown.propTypes = {
  align: PropTypes.string,
  anchorEl: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

Dropdown.defaultProps = {
  align: 'right',
};

export default Dropdown;
