import React from 'react';
import '../styles.css';
import '../own.css';

const ServiceMenu = () => {
  return (
    <>
      <div className='py-12 flex flex-col gap-y-8'>
        <h1 className='text-center text-2xl'>Service Menu</h1>
        <div className='flex justify-center gap-x-16'>
          <div className='flex flex-col'>
            <i className='fab fa-amazon text-7xl'></i>
            <h3 className='text-center uppercase'>Nails</h3>
          </div>
          <div className='flex flex-col'>
            <i className='fab fa-amazon text-7xl'></i>
            <h3 className='text-center uppercase'>Brow</h3>
          </div>
          <div className='flex flex-col'>
            <i className='fab fa-amazon text-7xl'></i>
            <h3 className='text-center uppercase'>hair</h3>
          </div>
          <div className='flex flex-col'>
            <i className='fab fa-amazon text-7xl text-center'></i>
            <h3 className='text-center uppercase'>cosmetology</h3>
          </div>
          <div className='flex flex-col'>
            <i className='fab fa-amazon text-7xl'></i>
            <h3 className='text-center uppercase'>makeup</h3>
          </div>
        </div>

        <div className='w-1/2 m-auto'>
          <h2 className='text-center'>
            Get your nails done for great mood. Simple pleasures can make your
            week, not just day.
          </h2>
        </div>
        <div className='flex justify-center'>
          <button
            className='
            text-base text-white
            px-3
            py-2
            mx-4
            bg-black
            uppercase
            border-2 border-solid
          '
          >
            view service menu
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceMenu;
