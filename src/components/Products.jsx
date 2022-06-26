import React from 'react';
import BadgeLink from './BadgeLink';
import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';
import Loader from './Loader';
import useGetTopProducts from '../hooks/useGetTopProducts';

const TopProducts = () => {
  const products = useGetTopProducts();
  return (
    <div className="mb-20 md:mt-20">
      <div className="container mx-auto -mb-10">
        <div className="flex items-center justify-between mb-6">
          <SectionTitle text="Top products" />
          <BadgeLink
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
                  imgURL={product.api_featured_image}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
