import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header>
      <div className="flex md:inline-flex items-center space-x-5">
        <Link href="/">
          <h1>BLOG HOME</h1>
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3>Follow</h3>
        </div>
      </div>
      <div />
    </header>
  );
}

export default Header;
