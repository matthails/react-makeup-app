import React from 'react';
import MainBanner from './../components/MainBanner';
import TopProducts from './../components/TopProducts';
import Benefits from '../components/Benefits';
import UniqueSellingPoint from '../components/UniqueSellingPoint';

function Home() {
  return (
    <>
      <MainBanner />
      <TopProducts />
      <UniqueSellingPoint />
      <Benefits />
    </>
  );
}

export default Home;
