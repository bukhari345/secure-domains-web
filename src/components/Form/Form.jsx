import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
    return (
        <>
            <style>
                {`
          .custom-input::placeholder {
            color: white !important; /* Ensure placeholder color is applied */
            opacity: 0.6; /* Adjust opacity if needed */
          }
        `}
            </style>
            <div className="container mt-5" style={{ backgroundColor: '#000312' }}>
                <div className="row mb-3 animated-text">
                    <div className="col-md-6 mb-3">
                        <input
                            type="text"
                            className="form-control custom-input"
                            style={{ backgroundColor: '#161826', color: 'white', height: '82px', borderRadius: '20px', opacity: '0.8', border: 'none' }}
                            placeholder="Name"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input
                            type="text"
                            className="form-control custom-input"
                            style={{ backgroundColor: '#161826', color: 'white', height: '82px', borderRadius: '20px', opacity: '0.8', border: 'none' }}
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div className="row mb-3 animated-text">
                    <div className="col-md-6 mb-3">
                        <input
                            type="text"
                            className="form-control custom-input"
                            style={{ backgroundColor: '#161826', color: 'white', height: '82px', borderRadius: '20px', opacity: '0.8', border: 'none' }}
                            placeholder="Phone"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input
                            type="text"
                            className="form-control custom-input"
                            style={{ backgroundColor: '#161826', color: 'white', height: '82px', borderRadius: '20px', opacity: '0.8', border: 'none' }}
                            placeholder="Address"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <textarea
                            className="form-control custom-input"
                            rows="5"
                            style={{ backgroundColor: '#161826', color: 'white', height: '254px', borderRadius: '20px', opacity: '0.8', border: 'none' }}
                            placeholder="Enter Your Comments"
                        ></textarea>
                        <div className="form-check d-flex align-items-center mb-3 mt-2">
                            <input className="form-check-input" type="checkbox" id="exampleCheckbox" style={{ backgroundColor: 'transparent', borderRadius: '50%' }} />
                            <label className="form-check-label ms-2" htmlFor="exampleCheckbox" style={{ color: 'white', fontSize: '18px', fontFamily: 'Poppins', fontWeight: '400' }}>
                                Save my name, email, and website in this browser for the next time I comment.
                            </label>
                           
                        </div>
                        <button 
                                className="btn btn-primary mb-3 mb-md-0" 
                                style={{ width: '175px', height: '40.676px', borderRadius: '6.893px',backgroundColor:'#43E1CF',color:'black',fontWeight:'600',fontSize:'15.165px',fontFamily:'Poppins' }}
                            >
                                send a message
                            </button>
                    </div>
                </div>
            </div>
            <br/>
        </>
    );
}

export default Form;
