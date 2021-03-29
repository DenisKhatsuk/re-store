import React from 'react';

import './shopping-cart-table.css';

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className = "table">
        <thead>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>JavaScript and jQuery: Interactive Front-End Web Development</td>
            <td>1</td>
            <td>$16.51</td>
            <td>Action</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCartTable;
