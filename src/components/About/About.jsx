import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  return (
    <div 
      className="container-fluid text-light py-5" 
      style={{ 
        backgroundColor: '#000312', 
        backgroundImage: 'url(/about.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
        <div className='container'> 
          <div className="text-center mb-5">
            <h1 style={{color:'#43E1CF', fontSize:'42px', fontWeight:'700'}}>About Us</h1>
          </div>
          <div className="mb-5">
            <h2>OVERVIEW</h2>
            <p>
              Secure domains is the first GCC company that provides cloud-based DNS firewall services and security via its flagship SaaS product "DNS Armor" where Secure Domains was established in 2023 with the purpose of providing the best cloud-based DNS security services with top-notch security in a very user-friendly approach such that “DNS Armour” can be utilized in the most efficient way depending on the specific needs of each of our clients due to the flexibility in the implementation of DNS Armor and its highly customizable nature in application and sizing.
            </p>
            <p>
              With our main offices in UAE & Saudi Arabia, we are able to provide full coverage and support of all implementations in the MENA region and other regions all over the globe, as DNS Armor is fully operational on 25 data centers distributed between the US, EU, Asia, and Africa.
            </p>
          </div>
          <div className="mb-5">
            <h2>OUR MISSION</h2>
            <ol>
              <li>Reshaping the cybersecurity and tech industry in DNS Security.</li>
              <li>Become a global leader in DNS Security domain.</li>
              <li>Continuous improvement of our services & evolving to provide a better experience for our clients.</li>
            </ol>
          </div>
          <div>
            <h2>OUR VISION</h2>
            <ol>
              <li>To become a pioneer and a leading provider of Multi Tenancy based Cloud DNS Firewall and security globally starting from the Middle East and then expanding globally.</li>
              <li>To set new standards for cybersecurity excellence and digital transformation.</li>
              <li>To continue growing and build partnerships with top Cloud Service Providers in the region.</li>
            </ol>
          </div>
        </div>
    </div>
  );
}

export default AboutUs;


