import React from 'react'
import NavbarComponent from './components/Navbar/Navbar';
import FooterSection from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import Form from './components/Form/Form';
const Contact = () => {
  return (
    <div style={{backgroundColor:'#000312'}}>
   <NavbarComponent />
   <ContactForm />
   <Form />
   <FooterSection />
 
    </div>
  )
}

export default Contact;