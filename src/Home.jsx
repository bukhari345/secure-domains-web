import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductInfo from './components/Intro_Content/ProductInfo';
import AttackStats from './components/Percentages/ShowProgress';
import WhySecureDomains from './components/Why_Secure_Domain/SecureDomains';
import ServiceAvailability from './components/ServiceAvailability/ServiceAvailability';
import NewsletterSubscription from './components/SubscribeNews/NewsLetter';
import FooterSection from './components/Footer/Footer';

const Home = () => {
  return (
    <div style={{ 
      backgroundColor: '#000312',
      width: '100%', 
      overflowX: 'hidden', // Prevent horizontal scrolling
      boxSizing: 'border-box' // Include padding and border in element's width and height
    }}>
      <Navbar />
      <ProductInfo />
      <AttackStats />
      <WhySecureDomains />
      <ServiceAvailability />
      <NewsletterSubscription />
      <FooterSection />
    </div>
  );
};

export default Home;
