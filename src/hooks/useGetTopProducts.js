import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json';

const useGetTopProducts = () => {
  const [products, setProducts] = useState([]);

  // const getTopProducts = () => {
  //   axios.get(`${BASE_URL}?product_tags=ecocert`).then(({ data }) => {
  //     setProducts(data);
  //   });

  // Alternative axios syntax uses a params object

  const getTopProducts = () => {
    axios
      .get(BASE_URL, { params: { product_tags: 'ecocert' } })
      .then(({ data }) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    getTopProducts();
  }, []);
  return products;
};

export default useGetTopProducts;
