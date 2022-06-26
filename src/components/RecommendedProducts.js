import React from 'react';
import useGetRecommendedProducts from '../hooks/useGetRecommendedProducts';
import Loader from './Loader';
import ProductCard from './ProductCard';
import SectionTitle from './SectionTitle';

const RecommendedProducts = ({ product }) => {
  const products = useGetRecommendedProducts(product);
  console.log(products);

  return (
    <>
      <SectionTitle text="For you" />
      {products.length === 0 ? (
        <Loader classes="my-4" />
      ) : (
        <div className="flex flex-wrap justify-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              brand={product.brand}
              imgURL={product.api_featured_image}
              price={product.price}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default RecommendedProducts;
