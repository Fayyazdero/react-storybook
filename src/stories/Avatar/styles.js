import styled from 'styled-components';
import COLORS from '../constants/colors';

export const Tooltip = styled.span`
  visibility: hidden;
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  font-size: 16px;
  z-index: 1;
  bottom: 105%;
  width: 150px;
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }

 
`;
export const AvatarContainer = styled.div`
position: relative;
display: inline-flex;
justify-content: center;
align-items: center;
border-radius: 50%;
width: ${props => props.size === 'sm' ? '40px' : props.size === 'lg' ? '120px' : '80px'};
height: ${props => props.size === 'sm' ? '40px' : props.size === 'lg' ? '120px' : '80px'};
background-color: ${props => COLORS[props.bgClr] || COLORS.default};
  opacity: ${props => props.disabled ? 0.5 : 1};
  font-size: ${props => props.size === 'sm' ? '12px' : props.size === 'lg' ? '36px' : '24px'};
  &:hover ${Tooltip} {
    visibility: visible;
  }
`;

export const Badge = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  border: 2px solid white;
`;

export const StyledImage = styled.img`
    width: ${props => props.size === 'sm' ? '40px' : props.size === 'lg' ? '120px' : '80px'};
    height: ${props => props.size === 'sm' ? '40px' : props.size === 'lg' ? '120px' : '80px'};
    border-radius: 50px;
`

