import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      width="70"
      height="60"
      src="/static/logo.svg"
      {...props}
    />
  );
};

export default Logo;
