import React from 'react';

import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className = "shop-header row">
      <a href="#_" 
         className = "logo text-dark" 
         role = "banner">
           ReStore
      </a>
      <a href="#_">
        <i className = "cart-icon fa fa-shopping-cart"></i>
        {numItems} items (${ total })
      </a>
    </header>
  );
};

export default ShopHeader;
