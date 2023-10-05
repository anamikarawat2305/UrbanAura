import React from 'react';
import {products } from '../data';

const Products = () => {
  const {title, subtitle} = products;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        
      </div>
    </section>
  );

};

export default Products;
