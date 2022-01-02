import React from 'react';
import Product1 from './images/Product1.png';
import Product2 from './images/Product2.png';
import Product3 from './images/Product3.png';
import Product4 from './images/Product4.png';
import Bear from './images/Bear.jpeg';
import '../styles.css';
import '../own.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <body>
        <div class='ownBackImage'>
          <div class='flex p-8 fixed w-full justify-around custcolor hover:bg-white bg-teal-300'>
            <img
              src='https://firstsight.design/cherie/beauty/wp-content/uploads/2020/09/Logo-Black.svg'
              alt=''
            />
            <div class='xl:gap-x-16 xl:ml-80 lg:gap-x-10 md:gap-x-5 hidden md:flex'>
              <a href='#'>
                <p class='uppercase '>service menu</p>
              </a>
              <a href='#'>
                <p class='uppercase '>booking</p>
              </a>
              <a href='#'>
                <p class='uppercase '>our story</p>
              </a>
              <a href='#'>
                <p class='uppercase '>shop</p>
              </a>
              <a href='#'>
                <p class='uppercase '>
                  {' '}
                  <Link to='/login'>Login</Link>
                </p>
              </a>
              <a href='#'>
                <p class='uppercase '>
                  {' '}
                  <Link to='/register'>Register</Link>
                </p>
              </a>
            </div>

            <div class='gap-x-6 hidden md:flex'>
              <i class='fab fa-instagram text-3xl'></i>
              <i class='fab fa-facebook text-3xl'></i>
            </div>

            <div class='md:hidden'>
              <i class='fas fa-bars text-3xl'></i>
            </div>
          </div>
          <div>
            <h1
              class='
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

          <div class='flex justify-center'>
            <button
              class='
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
              class='
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

          <div class='hidden md:flex py-32 justify-center gap-x-8'>
            <div>
              <h2 class='uppercase text-white text-center'>Contact</h2>
              <p class='text-white'>9167982362</p>
            </div>
            <div>
              <h2 class='uppercase text-white text-center'>Hours</h2>
              <p class='text-white'>Mon to fri: 7:30am to 8pm</p>
              <p class='text-white'>Sat to Sun: 7:30am to 10pm</p>
            </div>
            <div>
              <h2 class='uppercase text-white text-center'>Location</h2>
              <p class='text-white'>Kathmandu, Nepal</p>
            </div>
          </div>
        </div>

        <div class='flex md:hidden topcss justify-center gap-x-8 gap-y-8'>
          <div>
            <h2 class='uppercase text-center'>Contact</h2>
            <p class='text-center'>9167982362</p>
          </div>
          <div>
            <h2 class='uppercase text-center'>Hours</h2>
            <p class='text-center'>Mon to fri: 7:30am to 8pm</p>
            <p class='text-center'>Sat to Sun: 7:30am to 10pm</p>
          </div>
          <div>
            <h2 class='uppercase text-center'>Location</h2>
            <p class='text-center'>Kathmandu, Nepal</p>
          </div>
        </div>

        <div class='py-12 flex flex-col gap-y-8'>
          <h1 class='text-center text-2xl'>Service Menu</h1>
          <div class='flex justify-center gap-x-16'>
            <div class='flex flex-col'>
              <i class='fab fa-amazon text-7xl'></i>
              <h3 class='text-center uppercase'>Nails</h3>
            </div>
            <div class='flex flex-col'>
              <i class='fab fa-amazon text-7xl'></i>
              <h3 class='text-center uppercase'>Brow</h3>
            </div>
            <div class='flex flex-col'>
              <i class='fab fa-amazon text-7xl'></i>
              <h3 class='text-center uppercase'>hair</h3>
            </div>
            <div class='flex flex-col'>
              <i class='fab fa-amazon text-7xl text-center'></i>
              <h3 class='text-center uppercase'>cosmetology</h3>
            </div>
            <div class='flex flex-col'>
              <i class='fab fa-amazon text-7xl'></i>
              <h3 class='text-center uppercase'>makeup</h3>
            </div>
          </div>

          <div class='w-1/2 m-auto'>
            <h2 class='text-center'>
              Get your nails done for great mood. Simple pleasures can make your
              week, not just day.
            </h2>
          </div>
          <div class='flex justify-center'>
            <button
              class='
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

        <div class='lastcss pt-16'>
          <div class='grid lg:grid-cols-2 py-12 md:grid-cols-1'>
            <div class='px-8'>
              <img src={Bear} alt='' />
            </div>

            <div class='flex flex-col md:px-8 md:py-4'>
              <h1 class='text-4xl'>Our Story</h1>
              <div class='lg:w-4/6 md:w-full'>
                <p class='lg:pt-8 md:pt-4 leading-8'>
                  We started as a small beauty studio in Islington, London. Our
                  main idea was to create the best beauty studio in the world.
                  Can there be compromises in the best studio in the world? Our
                  answer is always no, we care about the best quality, we hire
                  the best specialists and provide the best customer service.
                  This approach allowed us to grow and create awesome team that
                  is passionate about everything we do.
                </p>
              </div>

              <div class='flex pt-8  '>
                <button
                  class='
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

        <div class='flex flex-col'>
          <h1 class='kritishop text-center '>Shop</h1>
          <div class='flex'>
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
          <div class='flex pt-8 justify-center '>
            <button
              class='
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
      </body>
    </>
  );
};

export default NavBar;
