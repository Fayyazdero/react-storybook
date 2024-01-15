import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';
import { FaIcons } from 'react-icons/fa';

const Button = ({ variant, size, disabled, bgClr, children, iconLeft, iconRight }) => {
  
  return (
    <StyledButton variant={variant} bgClr={bgClr} size={size} disabled={disabled}>
      {iconLeft && <span className="icon-left"><FaIcons name="left-icon" /></span>}
      {children}
      {iconRight && <span className="icon-right"><FaIcons name="right-icon" /></span>}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  children: PropTypes.node,
  bgClr: PropTypes.oneOf(['primary', 'secondary', 'danger', 'warning']),
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
};

Button.defaultProps = {
  variant: 'contained',
  size: 'medium',
  disabled: false,
  bgClr: 'primary',
};

export default Button;
