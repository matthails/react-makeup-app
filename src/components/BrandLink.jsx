import React from 'react';
import { Link } from 'react-router-dom';

// const BrandLink = () => (
//   <Link className="text-2xl" to="/">
//     Welly
//   </Link>
// );

const BrandLink = ({ classes }) => (
  <Link className={`text-2xl font-krona ${classes}`} to="/">
    Welly
  </Link>
);

export default BrandLink;
