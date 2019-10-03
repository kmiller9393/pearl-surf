import React from 'react';

const Header = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <img src="../../static/pearl-st-logo.png" alt="logo" />
      <div>
        <a href="/">Orders</a>
        <a href="/">Surfboards</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
    </div>
  );
};

export default Header;
