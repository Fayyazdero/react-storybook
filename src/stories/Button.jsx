import React from 'react';
import PropTypes from 'prop-types';
// import './input.css';  // You need to create this CSS file for styling

/**
 * Primary UI component for user input
 */
export const Input = ({ backgroundColor, size, placeholder, ...props }) => {
  return (
    <input
      type="text"
      className={['storybook-input', `storybook-input--${size}`].join(' ')}
      placeholder={placeholder}
      style={backgroundColor && { backgroundColor }}
      {...props}
    />
  );
};

Input.propTypes = {
  /**
   * What background color to use for the input
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the input be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Placeholder text for the input
   */
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  backgroundColor: null,
  size: 'medium',
  placeholder: '',
};
