import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, brand, price, imgURL }) => (
  <Link
    className="flex flex-col align-center rounded-md mb-6 mr-6 px-4 py-6 transform hover:scale-105 hover:shadow-xl transition delay-50 duration-300 ease-in-out"
    to={`/product/${id}`}
  >
    <div className="flex flex-1 flex-col justify-center mb-4">
      <img width="120" src={imgURL} alt={name} className="mx-auto" />
    </div>

    <div>
      <p className="text-yellow font-krona text-sm lowercase">{name}</p>

      <p className="mb-4">{brand}</p>

      <p>{price}</p>
    </div>
  </Link>
);

export default ProductCard;
