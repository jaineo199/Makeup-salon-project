import React from 'react';
import card from './images/card.jpg';
import '../styles.css';
import '../own.css';

const GiftCard = () => {
  return (
    <>
      <div className='cardcss pt-16'>
        <div className='grid lg:grid-cols-2 py-12 md:grid-cols-1'>
          <div className='px-8'>
            <img src={card} alt='' />
          </div>

          <div className='flex flex-col md:px-8 md:py-4'>
            <h1 className='text-4xl'>Gift Cards</h1>
            <div className='lg:w-4/6 md:w-full'>
              <p className='lg:pt-8 md:pt-4 leading-8'>
                When in doubt what to buy as a gift, this is the best option.
                Our gift cards have no expiration date and can be used to pay
                for all the services in our beauty studio or in our cosmetic
                shop. You can choose phisican or electronic format of the gift
                card. Amount is also flexible. You can personalize your gift
                card with a message.
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
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftCard;
