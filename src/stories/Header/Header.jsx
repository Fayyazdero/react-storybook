import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import Button from '../Button/Button';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="storybook-header">
      <div>
        <h1>Navbar</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout}>Log out</Button>
          </>
        ) : (
          <>
              <Button size="small" onClick={onLogin}>Log in</Button> 
             <Button primary size="small" onClick={onCreateAccount}>Sign up</Button>
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
