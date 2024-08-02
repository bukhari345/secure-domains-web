import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterSection = () => {
    return (
        <div style={{ backgroundColor: '#000829', width: '100%', height: 'auto', padding: '20px 0' }}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <p style={{ fontSize: '21.222px', fontFamily: 'Poppins', fontWeight: '700', color: 'white' }}>
                            Start securing your network today
                        </p>
                        <p style={{ fontFamily: 'Poppins', fontSize: '15.032px', color: 'white' }}>
                            Contact our sales team to learn more about our<br />
                            services and solutions, or get in touch for a consultation<br />
                            with one of our representatives.
                        </p>
                        <div className="d-flex flex-column flex-md-row align-items-center">
                            <button 
                                className="btn btn-primary mb-3 mb-md-0" 
                                style={{ width: '175px', height: '40.676px', borderRadius: '6.893px',backgroundColor:'white',color:'black',fontWeight:'600',fontSize:'15.165px',fontFamily:'Poppins' }}
                            >
                                Submit
                            </button>
                            <p style={{ fontFamily: 'Poppins', fontSize: '15.032px', color: 'white', marginLeft: '10px', marginBottom: 0 }}>
                                Submit to get our datasheet and learn more<br /> about upgrades and other changes.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column flex-md-row align-items-start justify-content-md-between">
                        <div>
                            <p style={{ color: 'white', fontFamily: 'Poppins', fontSize: '21.222px', fontWeight: '700' }}>Contact Us</p>
                            <p style={{ color: 'white', fontFamily: 'Poppins', fontSize: '15.917px', fontWeight: '400' }}>United Arab Emirates</p>
                            <p style={{ color: 'white', fontFamily: 'Poppins', fontSize: '15.917px', fontWeight: '400' }}>Email: info@secure-</p>
                            <p style={{ color: 'white', fontFamily: 'Poppins', fontSize: '15.917px', fontWeight: '400' }}>domains.org</p>
                        </div>
                        <img src="new.png" alt="Company Logo" style={{ maxWidth: '300px', height: 'auto', marginLeft: 'auto',marginTop:'30px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterSection;
