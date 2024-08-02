import React from 'react';
import NavbarComponent from './components/Navbar/Navbar';
import ButtonGrid from './components/Product/ProductData';
import FooterSection from './components/Footer/Footer';
import DnsDescription from './components/Product/ProductText';

const Product = () => {
  return (
    <div style={{ 
        backgroundColor: '#000312',
        width:'100%', // Ensure it takes at least the full height of the viewport
        overflowX: 'hidden', // Prevent horizontal scrolling
        boxSizing: 'border-box' // Include padding and border in element's width and height
        
      }}>
      <NavbarComponent />
      
        <ButtonGrid />
        <DnsDescription />
      
      <FooterSection />
    </div>
  );
}

export default Product;
