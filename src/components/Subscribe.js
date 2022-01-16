import React from 'react';
import '../styles.css';
import '../own.css';

const Subscribe = () => {
  return (
    <>
      <div className='py-12 flex  gap-y-8 inquiry'>
        <div>
          <h3 className='text-center '>Follow Us</h3>
          <p>Don’t miss promotions, follow us for the latest news</p>
        </div>

        <div className='w-1/2 m-auto'>
          <h2 className='text-center'>We Don’t Keep Our Beauty Secrets</h2>
          <p className='text-center'>Subscribe now and thank us later</p>
          <div className='flex justify-center'>
            <input type='text' placeholder='write your email' />
            <button
              className='
              text-base
              border-black
              px-3
              py-2
              mx-4
              text-center
              uppercase
              border-2 border-solid
              hover:bg-black hover:text-white
            '
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
