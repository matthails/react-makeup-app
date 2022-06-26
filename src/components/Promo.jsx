import React from 'react';
import BadgeLink from './BadgeLink';
import Img from './../img/image-color.png';

const Promo = () => {
  return (
    <div className="container flex items-center justify-between mx-auto md:px-20 bg-green w-full">
      <div>
        <h3 className="font-krona mb-4 text-white">
          Be natural, <br /> be smart, <br /> be you
        </h3>
        <BadgeLink path="/about" text="see more" />
      </div>
      <div className="ml-4">
        <img
          className="py-8"
          width="200"
          src={Img}
          alt="A bundle of cream products standing next to each other"
        />
      </div>
    </div>
  );
};

export default Promo;
