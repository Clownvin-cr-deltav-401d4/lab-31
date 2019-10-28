import React from 'react';

function Header(props) {
  return (
    <>
      <header id="header">
        <h2>There are {props.count} Items To Complete</h2>
      </header>
    </>
  );
}

export default Header;
