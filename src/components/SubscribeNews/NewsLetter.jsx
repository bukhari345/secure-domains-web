import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsletterSubscription = () => {
    return (
        <div style={{width:'100%',height:'300px',backgroundColor:'#000312'}}>
            <br/>
            <br/>
        <div className="container" style={{ backgroundColor: '#0A0E27', padding: '20px', borderRadius: '10px' }}>
            <div className="text-center">
                <h2 style={{ color: '#fff', fontFamily: 'Poppins', fontWeight: '700', marginBottom: '20px' }}>Subscribe to our newsletter</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="input-group">
                        <input 
                                type="email" 
                                className="form-control custom-input" 
                                placeholder="Enter Your Email Address" 
                                aria-label="Enter Your Email Address" 
                                style={{ 
                                    height: '50px', 
                                    borderRadius: '25px 0 0 25px', 
                                    paddingLeft: '20px', 
                                    backgroundColor: '#0a0e27', 
                                    color: 'white'
                                }}
                            />
                            <div className="input-group-append">
                                <button className="btn" type="button" style={{ backgroundColor: '#00E8E0', borderRadius: '0 25px 25px 0',height:'50px' }}>
                                    <img src="ico.png" alt="Send" style={{ width: '20px', }} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        </div>
    );
}

export default NewsletterSubscription;
