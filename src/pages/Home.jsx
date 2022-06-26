import React from 'react';
import CTA from './../components/CTA';
import Promo from './../components/Promo';
import Products from './../components/Products';
import Features from './../components/Features';
import UniqueSellingPoint from './../components/UniqueSellingPoint';

function Home() {
  return (
    <>
      <CTA />
      <Products />
      <Promo />
      <UniqueSellingPoint />
      <Features />
    </>
  );
}

export default Home;
