import React from 'react';
import oil from './images/oil.jpg';
import '../styles.css';
import '../own.css';

const BeautyBox = () => {
  return (
    <>
      <div className='oilcss pt-16'>
        <div className='grid lg:grid-cols-2 py-12 md:grid-cols-1'>
          <div className='px-8'>
            <img src={oil} alt='' />
          </div>

          <div className='flex flex-col md:px-8 md:py-4'>
            <h1 className='text-4xl'>Beauty Box</h1>
            <div className='lg:w-4/6 md:w-full'>
              <p className='lg:pt-8 md:pt-4 leading-8'>
                Our beauty box is a set of best full-size products that are top
                sellers in out online shop. We want you to be able to try
                everything at once and make sure that our selection of products
                is about quality, our product just do their job, no compromises.
                You can subscribe and get our beauty box every month or just buy
                it once.
              </p>
            </div>

            <div className='flex pt-8  '>
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
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeautyBox;
