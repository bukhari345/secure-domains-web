import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/poppins/700.css'; // Weight 400
import './intro.css'; // Import the CSS file for custom animations
import { useMediaQuery } from 'react-responsive';
const YourComponent = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 767.98px)' });
    return (
        <div className="container text-white" style={{ backgroundColor: '#000312' }}>
            <div className="row align-items-start"> {/* Align items to start */}
                <div className="col-md-6 col-12">
                    <p style={{ color: '#16757D', fontFamily: 'Poppins', fontSize: '34px', fontWeight: '700' }}>
                        Next Generation Cloud DNS Firewall:
                    </p>
                    <ul className="list-unstyled animated-list">
                        <li style={{ fontSize: '18px', fontFamily: 'Poppins', lineHeight: '45.838px' }}>
                         The First GCC Vendor Specialized in Cloud DNS Firewall Solutions
                        </li>
                        <li style={{ fontSize: '18px', fontWeight: '500', fontFamily: 'Poppins', lineHeight: '45.838px' }}>
                         Tailored for Local Market Needs
                        </li>
                        <li style={{ fontSize: '18px', fontWeight: '500', fontFamily: 'Poppins', lineHeight: '45.838px' }}>
                         Storage and Service Points of Presence (PoPs) in 25 Countries
                        </li>
                        <li style={{ fontSize: '18px', fontWeight: '500', fontFamily: 'Poppins', lineHeight: '45.838px' }}>
                         Multi-Tenancy Support
                        </li>
                        <li style={{ fontSize: '18px', fontWeight: '500', fontFamily: 'Poppins', lineHeight: '45.838px' }}>
                             Comprehensive Support for B2B, B2C, and MSPs
                        </li>
                        <li style={{ fontSize: '22px', fontWeight: '500', fontFamily: 'Poppins', lineHeight: '45.838px' }}>
                             Advanced Web Filtering and Categorization
                        </li>
                        <li style={{ fontSize: '22px', fontWeight: '500', fontFamily: 'Poppins', lineHeight: '45.838px' }}>
                             Robust Application Control
                        </li>
                        <li style={{ fontSize: '22px', fontWeight: '500', fontFamily: 'Poppins', lineHeight: '45.838px' }}>
                             Over 10 Million Threat Indicators
                        </li>
                    </ul>
                    <div
            style={{
                display: 'flex',
                justifyContent: isSmallScreen ? 'center' : 'flex-start', // Center on small screens, left-align on larger screens
                width: '100%', // Ensure it takes the full width of the container
            }}
        >
            <button
                style={{
                    width: '225px',
                    height: '50px',
                    borderRadius: '10px',
                    backgroundColor: '#16757D',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    fontWeight: '700',
                    fontFamily: 'Poppins',
                }}
            >
                Learn More
                <img
                    src='bt.png'
                    alt='Button Icon'
                    style={{
                        height: '15px',
                        width: '15px',
                        marginLeft: '10px', // Adjusted for better alignment
                    }}
                />
            </button>
        </div>
                </div>
                <div className="col-md-6 col-12 text-center">
                    <img src="shield.png" alt="Description" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default YourComponent;
