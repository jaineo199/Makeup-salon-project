import React from 'react';
import '../styles.css';
import '../own.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <body>
        <div className='ownBackImage'>
          <div className='flex p-8 fixed w-full justify-around custcolor hover:bg-white bg-teal-300'>
            <img
              src='https://firstsight.design/cherie/beauty/wp-content/uploads/2020/09/Logo-Black.svg'
              alt=''
            />
            <div className='xl:gap-x-16 xl:ml-80 lg:gap-x-8 md:gap-x-5 hidden md:flex'>
              <a href='#'>
                <p className='uppercase '>service menu</p>
              </a>
              <a href='#'>
                <p className='uppercase '>booking</p>
              </a>
              <a href='#'>
                <p className='uppercase '>our story</p>
              </a>
              <a href='#'>
                <p className='uppercase '>shop</p>
              </a>
              <a href='#'>
                <p className='uppercase '>
                  {' '}
                  <Link to='/login'>Login</Link>
                </p>
              </a>
              <a href='#'>
                <p className='uppercase '>
                  {' '}
                  <Link to='/register'>Register</Link>
                </p>
              </a>
            </div>

            <div className='gap-x-6 hidden md:flex'>
              <i className='fab fa-instagram text-3xl'></i>
              <i className='fab fa-facebook text-3xl'></i>
            </div>

            <div className='md:hidden'>
              <i className='fas fa-bars text-3xl'></i>
            </div>
          </div>
          <div>
            <h1
              className='
            xl:text-6xl
            lg:text-5xl
            md:text-4xl
            text-white
            xl:px-72
            lg:px-40
            md:px-16
            pt-44
            pb-12
            text-center
            font-serif
          '
            >
              Always Make Room for a Little Beauty in Your Life
            </h1>
          </div>

          <div className='flex justify-center'>
            <button
              className='
            text-xl
            px-3
            py-2
            mx-4
            bg-white
            uppercase
            border-2 border-solid
          '
            >
              book appointment
            </button>
            <button
              className='
            text-xl text-white
            px-3
            py-2
            mx-4
            uppercase
            border-2 border-solid
          '
            >
              view service menu
            </button>
          </div>

          <div className='hidden md:flex py-32 justify-center gap-x-8'>
            <div>
              <h2 className='uppercase text-white text-center'>Contact</h2>
              <p className='text-white'>9167982362</p>
            </div>
            <div>
              <h2 className='uppercase text-white text-center'>Hours</h2>
              <p className='text-white'>Mon to fri: 7:30am to 8pm</p>
              <p className='text-white'>Sat to Sun: 7:30am to 10pm</p>
            </div>
            <div>
              <h2 className='uppercase text-white text-center'>Location</h2>
              <p className='text-white'>Kathmandu, Nepal</p>
            </div>
          </div>
        </div>

        <div className='flex md:hidden topcss justify-center gap-x-8 gap-y-8'>
          <div>
            <h2 className='uppercase text-center'>Contact</h2>
            <p className='text-center'>9167982362</p>
          </div>
          <div>
            <h2 className='uppercase text-center'>Hours</h2>
            <p className='text-center'>Mon to fri: 7:30am to 8pm</p>
            <p className='text-center'>Sat to Sun: 7:30am to 10pm</p>
          </div>
          <div>
            <h2 className='uppercase text-center'>Location</h2>
            <p className='text-center'>Kathmandu, Nepal</p>
          </div>
        </div>
      </body>
    </>
  );
};

export default NavBar;
