import React from 'react';
import '../styles.css';
import '../own.css';

const Article = () => {
  return (
    <>
      <div className='py-12 flex flex-col gap-y-8'>
        <h1 className='text-center text-2xl'>As Seen On</h1>
        <div className='flex justify-center gap-x-16'>
          <div className='flex flex-col'>
            <h3 className='text-center'>
              “The place with its style, soul and uncompromising quality.“
            </h3>
          </div>
        </div>

        <div className='w-1/2 m-auto'>
          <h2 className='text-center uppercase'>
            <a href='#'>Read full article</a>
          </h2>
        </div>
        <div className='flex justify-center Bazaargap'>
          <img
            src='https://firstsight.design/cherie/beauty/wp-content/uploads/2020/11/Vogue.svg'
            alt=''
          />
          <img
            src='https://firstsight.design/cherie/beauty/wp-content/uploads/2020/11/Bazaar-2.svg'
            alt=''
          />
          <img
            src='https://firstsight.design/cherie/beauty/wp-content/uploads/2020/11/Elle.svg'
            alt=''
          />
        </div>
      </div>
    </>
  );
};

export default Article;
