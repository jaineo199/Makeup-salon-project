import React from 'react';
import Product1 from './images/Product1.png';
import Product2 from './images/Product2.png';
import Product3 from './images/Product3.png';
import Product4 from './images/Product4.png';
import '../styles.css';
import '../own.css';

const Shop = () => {
  return (
    <>
      <div className='flex flex-col'>
        <h1 className='kritishop text-center '>Shop</h1>
        <div className='flex'>
          <div>
            <img src={Product1} alt='' />
          </div>
          <div>
            <img src={Product2} alt='' />
          </div>
          <div>
            <img src={Product3} alt='' />
          </div>
          <div>
            <img src={Product4} alt='' />
          </div>
        </div>
        <div className='flex pt-8 justify-center '>
          <button
            className='
          text-base
          border-black
          px-3
          py-2
          mx-4
          uppercase
          border-2 border-solid
          hover:bg-black hover:text-white
        '
          >
            shop all
          </button>
        </div>
      </div>
    </>
  );
};

export default Shop;
