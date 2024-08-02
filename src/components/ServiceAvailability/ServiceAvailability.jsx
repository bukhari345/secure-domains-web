import React from 'react';

const ServiceAvailability = () => {
    return (
        <>
            <div style={{ 
                width: '100%', 
                height: 'auto', 
                backgroundColor: '#000312',
                backgroundImage: 'url("back.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat:'no-repeat',
            
            }}>
                <div className='container' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '20px 0' }}>
                    <div className='child1' style={{ margin: '20px' }}>
                        <p style={{ color: '#75DAE6', fontFamily: 'Poppins', fontSize: '52px', fontWeight: '700', lineHeight: '64px' }}>Americas</p>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='co1.png' style={{ width: '35px', height: '28px' }} />
                            <p style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }} className='mt-3'>Brazil South</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='co2.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>South Central US</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='co3.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>Central US</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='co4.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>East US</p>
                        </div>
                        <p style={{ color: '#75DAE6', fontFamily: 'Poppins', fontSize: '52px', fontWeight: '700', lineHeight: '64px' }}>Europe</p>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='e1.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>North Europe</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='e2.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>West Europe</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='e3.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>France Central</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='e4.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>Germany Central</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='e5.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>Italy North</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='e6.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>UK South</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='e7.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>Sweden Central</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='e8.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>Switzerland North</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='e9.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>Norway East</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='e10.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>Poland Central</p>
                        </div>
                    </div>
                    <div className='child2' style={{ margin: '20px' }}>
                        <p style={{ color: '#75DAE6', fontFamily: 'Poppins', fontSize: '52px', fontWeight: '700', lineHeight: '64px' }}>Africa</p>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='co5.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>Africa North</p>
                        </div>
                        <p style={{ color: '#75DAE6', fontFamily: 'Poppins', fontSize: '52px', fontWeight: '700', lineHeight: '64px' }}>Middle East</p>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='m1.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>UAE North</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='m2.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>Qatar Central</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='m3.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>KSA Central (Soon)</p>
                        </div>
                    </div>
                    <div className='child3' style={{ margin: '20px' }}>
                        <p style={{ color: '#75DAE6', fontFamily: 'Poppins', fontSize: '52px', fontWeight: '700', lineHeight: '64px' }}>Asia</p>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='a1.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>East Asia</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='a2.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>Southeast Asia</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='a3.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>Japan East</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='a4.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>Korea Central</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='a5.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>India South</p>
                        </div>
                        <p style={{ color: '#75DAE6', fontFamily: 'Poppins', fontSize: '52px', fontWeight: '700', lineHeight: '64px' }}>Australia</p>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                            <img src='aus.png' style={{ width: '35px', height: '28px' }} />
                            <p className='mt-3' style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '500', color: 'white', fontFamily: 'Poppins' }}>Australia</p>
                        </div>
                    </div>
                </div>
                <style>
                    {`
                        @media (max-width: 768px) {
                            .container {
                                flex-direction: column;
                                align-items: center;
                                text-align:center;
                            
                            }
                            .child1, .child2, .child3 {
                                
                                width: 100%;
                                text-align: center;
                            }
                            .child1 p, .child2 p, .child3 p {
                                font-size: 36px;
                                
                            }
                            .child1 div, .child2 div, .child3 div {
                                justify-content: center;
                                text-align:center;
                            }
                            .child1 p, .child2 p, .child3 p, .child1 img, .child2 img, .child3 img {
                                margin-bottom: 10px;
                                margin-left:-40px;
                            }
                        }
                    `}
                </style>
              
            </div>
           
        </>
    );
}

export default ServiceAvailability;
