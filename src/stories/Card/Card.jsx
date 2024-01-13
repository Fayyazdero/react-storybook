
import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

export const Card = ({ title, content, backgroundColor, border }) => {
  const cardStyle = {backgroundColor, border};

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
  onClick: PropTypes.func
};

Card.defaultProps = {
  backgroundColor: '#ffffff',
  border: null,
  onClick: undefined
};
