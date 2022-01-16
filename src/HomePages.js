import React from 'react';
import Article from './components/Article';
import BeautyBox from './components/BeautyBox';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import FollowUs from './components/FollowUs';
import GiftCard from './components/GiftCard';
import NavBar from './components/NavBar';
import OurStory from './components/OurStory';
import ServiceMenu from './components/ServiceMenu';
import Shop from './components/Shop';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

const Pages = () => {
  return (
    <>
      <NavBar />
      <ServiceMenu />
      <OurStory />
      <Shop />
      <BeautyBox />
      <GiftCard />
      <Blog />
      <Article />
      <Subscribe />
      <FollowUs />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Pages;
