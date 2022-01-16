import React from 'react';
import Makeupgirl from './images/makeup-girl.jpg';
import Insta1 from './images/Insta1.jpeg';
import Insta2 from './images/Insta2.jpeg';
import Insta3 from './images/Insta3.jpeg';
import Insta4 from './images/Insta4.jpeg';
import Insta5 from './images/Insta5.jpeg';
import Insta6 from './images/Insta6.jpeg';
import Insta7 from './images/Insta7.jpeg';
import '../styles.css';
import '../own.css';

const FollowUs = () => {
  return (
    <>
      <div className='followusback pt-16'>
        <h1 className='instaheading'>Instagram</h1>
        <div className='grid lg:grid-cols-2 py-12 md:grid-cols-1'>
          <div className='px-8'>
            <img src={Insta1} alt='' />
          </div>
          <div className=''>
            <div className='flex instasecond '>
              <img className='insta' src={Insta2} alt='' />
              <img className='insta' src={Insta3} alt='' />
              <img className='insta' src={Insta4} alt='' />
            </div>
            <div className='flex instasecond'>
              <img className='insta' src={Insta5} alt='' />
              <img className='insta' src={Insta7} alt='' />
              <img className='insta' src={Insta4} alt='' />
            </div>
          </div>
        </div>
        <div className='flex pt-8 justify-center '>
          <button
            className='
              text-base
              border-white
              px-3
              py-2
              mx-4
              uppercase
              border-2 border-solid
             text-white
              myfollowbtn
           
              hover:text-black
            '
          >
            Follow us @Firstsight Design
          </button>
        </div>
      </div>
    </>
  );
};

export default FollowUs;
