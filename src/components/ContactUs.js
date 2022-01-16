import React from 'react';
import '../styles.css';
import '../own.css';

const ContactUs = () => {
  return (
    <>
      <div className='py-12 flex  justify-between constactcss'>
        <div>
          <h3 className='text-center '>Contacts</h3>
          <p>T: 070 9485 7568</p>
          <p>info@beautysalon.com</p>
        </div>

        <div className=''>
          <h3 className='text-center '>Hours</h3>
          <p>Mon to Fri: 7:30 am — 1:00 am</p>
          <p>Sat: 9:00 am — 1:00 am</p>
          <p>Sun: 9:00 am — 11:30 pm</p>
        </div>

        <div>
          <h3 className='text-center '>Location</h3>
          <p>85 Royal Mint Street,</p>
          <p>New York, E1 8LG</p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
