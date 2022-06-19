import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">{children}</main>
    </>
  );
}

export default Layout;
