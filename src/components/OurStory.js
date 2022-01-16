import React from 'react';
import Makeupgirl from './images/makeup-girl.jpg';
import '../styles.css';
import '../own.css';

const OurStory = () => {
  return (
    <>
      <div className='lastcss pt-16'>
        <div className='grid lg:grid-cols-2 py-12 md:grid-cols-1'>
          <div className='px-8'>
            <img src={Makeupgirl} alt='' />
          </div>
          <div className='flex flex-col md:px-8 md:py-4'>
            <h1 className='text-4xl'>Our Story</h1>
            <div className='lg:w-4/6 md:w-full'>
              <p className='lg:pt-8 md:pt-4 leading-8'>
                We started as a small beauty studio in Islington, London. Our
                main idea was to create the best beauty studio in the world. Can
                there be compromises in the best studio in the world? Our answer
                is always no, we care about the best quality, we hire the best
                specialists and provide the best customer service. This approach
                allowed us to grow and create awesome team that is passionate
                about everything we do.
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
                learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
