import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
