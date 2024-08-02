import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountUp from 'react-countup';

const AttackStats = () => {
    // States to manage hover for each column
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);

    return (
        <div className='mt-5' style={{ width: '100%', backgroundColor: '#000312', marginTop: '-20px' }}>
            <br />
            <br/>
            <div className="container text-white py-5" style={{ backgroundColor: '#0B1121', borderRadius: '15px' }}>
                <div className="text-center mb-4">
                    <p style={{ color: 'white', fontFamily: 'Poppins', fontSize: '24px', fontStyle: 'normal', lineHeight: 'normal', fontWeight: '500' }}>
                        Percentage of increment in DNS/ based attacks in 2022 when compared to 2021
                    </p>
                </div>
                <div className="row text-center">
                    <div
                        className="col-md-3"
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}
                    >
                        <h2 style={{ color: '#16757D', fontWeight: '700', fontSize: '48px', fontFamily: 'Poppins' }}>
                            {isHovered1 ? <CountUp end={28} duration={2} /> : '28'}%
                        </h2>
                        <p style={{ fontSize: '24.163px', fontFamily: 'Poppins', fontWeight: '400' }}>DNS tunneling</p>
                    </div>
                    <div
                        className="col-md-3"
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}
                    >
                        <h2 style={{ color: '#16757D', fontWeight: '700', fontSize: '48px', fontFamily: 'Poppins' }}>
                            {isHovered2 ? <CountUp end={51} duration={2} /> : '51'}%
                        </h2>
                        <p style={{ fontSize: '24.163px', fontFamily: 'Poppins', fontWeight: '400' }}>DNS Phishing</p>
                    </div>
                    <div
                        className="col-md-3"
                        onMouseEnter={() => setIsHovered3(true)}
                        onMouseLeave={() => setIsHovered3(false)}
                    >
                        <h2 style={{ color: '#16757D', fontWeight: '700', fontSize: '48px', fontFamily: 'Poppins' }}>
                            {isHovered3 ? <CountUp end={30} duration={2} /> : '30'}%
                        </h2>
                        <p style={{ fontSize: '24.163px', fontFamily: 'Poppins', fontWeight: '400' }}>DDoS Attacks</p>
                    </div>
                    <div
                        className="col-md-3"
                        onMouseEnter={() => setIsHovered4(true)}
                        onMouseLeave={() => setIsHovered4(false)}
                    >
                        <h2 style={{ color: '#16757D', fontWeight: '700', fontSize: '48px', fontFamily: 'Poppins' }}>
                            {isHovered4 ? <CountUp end={28} duration={2} /> : '28'}%
                        </h2>
                        <p style={{ fontSize: '24.163px', fontFamily: 'Poppins', fontWeight: '400' }}>DNS Hijacking</p>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    );
};

export default AttackStats;
