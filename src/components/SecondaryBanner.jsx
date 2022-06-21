import React from 'react';
import ButtonLink from './ButtonLink';
import bannerImg from './../img/secondarybanner.png';

const myStyles = {
  position: 'relative',
  bottom: '-100px',
};

const SecondaryBanner = () => {
  return (
    <div
      className={`${myStyles} container flex items-center justify-between mx-auto md:px-20 bg-green w-full`}
    >
      <div>
        <h3 className="font-krona mb-4 text-white">
          Be natural, <br /> be smart, <br /> be you
        </h3>
        <ButtonLink path="/about" text="see more" />
      </div>
      <div className="ml-4">
        <img
          className="py-8"
          width="200"
          src={bannerImg}
          alt="A bundle of cream products standing next to each other"
        />
      </div>
    </div>
  );
};

export default SecondaryBanner;
