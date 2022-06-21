import React from 'react';
import SecondaryBanner from './SecondaryBanner';
import ButtonLink from './ButtonLink';
import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';
import Loader from './Loader';
import pexelsImg from './../img/pexels-empty-photo.jpg';
const products = [
  {
    id: 1,
    name: 'Hat',
    band: 'Nike',
    price: 9,
  },
  {
    id: 2,
    name: 'Tracksuit',
    band: 'Puma',
    price: 15,
  },
  {
    id: 3,
    name: 'Gloves',
    band: 'Unbranded',
    price: 5,
  },
];

const TopProducts = () => {
  return (
    <div className="md:mt-20">
      <div className="container mx-auto -mb-10">
        <div className="flex items-center justify-between mb-6">
          <SectionTitle text="Top Products" />
          <ButtonLink
            path="/about"
            text="see more"
            isMain
            className="hidden md:block"
          />
        </div>
        {/* Products */}
        <div className="flex flex-wrap justify-center">
          {products.length === 0 ? (
            <Loader classes="my-4" />
          ) : (
            <>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  brand={product.brand}
                  price={product.price}
                  imgURL={pexelsImg}
                />
              ))}
            </>
          )}
        </div>
      </div>
      <SecondaryBanner />
    </div>
  );
};

export default TopProducts;
