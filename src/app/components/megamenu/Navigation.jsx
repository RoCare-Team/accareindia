import React from 'react'
import MegaMenu from './MegaMenu';

const Navigation = () => {
  return (
    <header className="nav__header">
      {/* logo here */}
      <div className="hidden md:block">
        <MegaMenu />
      </div>
      {/* UserProfile */}
    </header>
  );
};

export default Navigation;