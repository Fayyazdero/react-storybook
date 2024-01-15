import React from 'react';
import PropTypes from 'prop-types';
import { AvatarContainer, Badge, StyledImage, Tooltip } from './styles';

const Avatar = ({ type, content, withBadge, withTooltip, disabled, size, bgClr }) => {
  return (
        <AvatarContainer size={size} bgClr={bgClr} disabled={disabled}>
        {type === 'icon' && content}
        {type === 'image' && <StyledImage src={content} alt="Avatar" />}
        {type === 'text' && <span>{content}</span>}
        {withBadge && <Badge />}
        {withTooltip && <Tooltip>Tooltip Content</Tooltip>}
        </AvatarContainer>
  );
};

Avatar.propTypes = {
  type: PropTypes.oneOf(['icon', 'image', 'text']),
  content: PropTypes.string,
  withBadge: PropTypes.bool,
  withTooltip: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  bgClr: PropTypes.oneOf(['primary', 'secondary', 'danger', 'warning']),
};

Avatar.defaultProps = {
  withBadge: false,
  withTooltip: true,
  disabled: false,
  size: 'md',
  bgClr: 'primary',
};

export default Avatar;
