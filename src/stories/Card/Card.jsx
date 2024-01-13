
import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

export const Card = ({ title, content, backgroundColor, border }) => {
  const cardStyle = {};
  if (backgroundColor || border) {
    cardStyle.backgroundColor = backgroundColor;
    cardStyle.border = border;
  }
  console.log({cardStyle})

  return (
    <div className="storybook-card" style={cardStyle}>
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
};

Card.defaultProps = {
  backgroundColor: '#ffffff',
  border: '',
};
