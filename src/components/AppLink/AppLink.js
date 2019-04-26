import React from 'react';

function AppLink() {
  function handleClick(e) {
    console.log('This is App Link.');
  }

  return(
    <a href="#" onClick={handleClick}> Click me.</a>
  );
}

export default AppLink;