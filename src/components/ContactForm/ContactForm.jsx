import React from 'react';

const ContactForm = () => {
    return (
        <>
            <style>
                {`
                @keyframes slideIn {
                    0% {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animated-text {
                    animation: slideIn 1s ease-out;
                }
                `}
            </style>
            <div className='mt-5' style={{ width: '100%', backgroundColor: '#000312', color: 'white', height: '200px' }}>
                <div className='animated-text'>
                    <p style={{ textAlign: 'center', fontSize: '22px', fontWeight: '400', fontFamily: 'Poppins' }}>
                        Please leave your contact details and inquiry below, and we will respond shortly.<br /> Alternatively, you can reach us using the contact information provided in the "Contact<br /> Us" section below.
                    </p>
                </div>
            </div>
        </>
    );
}

export default ContactForm;
