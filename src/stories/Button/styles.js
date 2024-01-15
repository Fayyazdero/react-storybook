import styled from 'styled-components';
import COLORS from '../constants/colors';

export const StyledButton = styled.button`
  padding: ${props => props.size === 'small' ? '8px' : props.size === 'large' ? '16px' : '12px'};
  border: ${props => props.variant === 'outlined' ? '2px solid black' : 'none'};
  background-color: ${props => COLORS[props.bgClr] || COLORS.default};
  color: ${props => props.variant === 'contained' ? 'white' : 'black'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  border-radius: 4px;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }

  ${props => props.variant === 'noBorder' && `
    border: none;
  `}

  .icon-left, .icon-right {
    display: inline-flex;
    align-items: center;
    margin: 0 5px;
  }
`;