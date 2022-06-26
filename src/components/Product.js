import React from 'react';
import PropTypes from 'prop-types';
import CartButton from './CartButton';
import ProductPrice from './ProductPrice';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';
import ProductTitle from './ProductTitle';

// https://makeup-api.herokuapp.com/api/v1/products/1017.json

const Product = ({
  // name = 'Creme to Powder Blush',
  // img = 'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/017/original/open-uri20180630-4-1r5paz3?1530390370',
  // type = 'Blush',
  // category = 'Cream',
  // price = '9.99',
  // description = 'A cream to powder blush made with all natural ingredients that applies like a soft cream but finishes like a silky powder. Antioxidant-rich botanicals help moisturize the skin, while natural pigments provide long-lasting buildable color for a healthy, radiant glow. Made with natural and organic ingredients.',
  name,
  img,
  type,
  category,
  price,
  description,
}) => (
  <>
    <ProductTitle name={name} type={type} />
    <div className="flex flex-col lg:flex-row items-center justify-center mb-20">
      <ProductImage name={name} img={img} />

      <div>
        <ProductInfo name={name} type={type} category={category} />

        <div className="flex my-10 justify-between">
          <ProductPrice price={price} isLarge />
          <CartButton />
        </div>

        <ProductDescription text={description} />
      </div>
    </div>
  </>
);

export default Product;

Product.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
