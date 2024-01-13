import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

export const Input = ({ primary, backgroundColor, placeholder, ...props }) => {
  const mode = primary ? 'storybook-input--primary' : 'storybook-input--secondary';
  return (
    <input
      type="text"
      className={['storybook-input', mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      placeholder={placeholder}
      {...props}
    />
  );
};

Input.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  backgroundColor: null,
  primary: false,
  placeholder: '',
};
