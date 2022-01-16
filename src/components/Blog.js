import React from 'react';
import Hair from './images/Hair.jpg';
import Health from './images/Health.jpg';
import cream from './images/cream.jpg';
import Therapy from './images/Therapy.jpg';
import '../styles.css';
import '../own.css';

const Blog = () => {
  return (
    <>
      <div className='productcss pt-16'>
        <h1 className='text-center blogcss'>Blog</h1>

        <div className='flex gap-4'>
          <div className='px-8'>
            <img src={Health} alt='' />
            <p className='text-center'>10 Tips for Healthy Mind and Body</p>
          </div>

          <div className='px-8'>
            <img src={Hair} alt='' />
            <p className='text-center'>
              How to Maintain Healthy Hair: 10 Easy Tips
            </p>
          </div>

          <div className='px-8'>
            <img src={Therapy} alt='' />
            <p className='text-center'>Aroma Therapy and Aroma Massages</p>
          </div>

          <div className='px-8'>
            <img src={cream} alt='' />
            <p className='text-center'>10 Ways to Spend Your Weekend Outside</p>
          </div>
        </div>
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
          Shop now
        </button>
      </div>
    </>
  );
};

export default Blog;
