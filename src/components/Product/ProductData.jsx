import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/poppins/400.css'; // Weight 400

const buttonStyle = {
    width: '100%',
    borderRadius: '75px',
    backgroundColor: '#3CCAC9',
    color: '#010311',
    fontWeight: '600',
    height: '44px',
    fontFamily: 'Poppins',
    fontSize: '16px',
    border: 'none',
    textAlign: 'center',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease', // Smooth transition for background color
};

const buttonHoverStyle = {
    backgroundColor: '#2c9f9f',
};

const titleStyle = {
    fontFamily: 'Poppins',
    fontSize: '52px',
    fontWeight: '700',
    color: 'white',
    marginBottom: '40px',
};

const ButtonGrid = () => {
    const [hoveredButton, setHoveredButton] = useState(null);

    const handleMouseEnter = (index) => setHoveredButton(index);
    const handleMouseLeave = () => setHoveredButton(null);

    const renderButton = (text, index) => (
        <div className="col-md-3 col-sm-6 mb-3" key={index}>
            <button
                className="btn"
                style={{
                    ...buttonStyle,
                    backgroundColor: hoveredButton === index ? buttonHoverStyle.backgroundColor : buttonStyle.backgroundColor
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
            >
                {text}
            </button>
        </div>
    );

    return (
        <>
            <div className="container text-center mt-3">
                <div className="row">
                    <div className="col-12">
                        <h1 style={titleStyle}>
                            DNS Armor
                        </h1>
                    </div>
                    {renderButton('What is DNS?', 0)}
                    {renderButton('The need for DNS security', 1)}
                    {renderButton('DNS Security Use Cases', 2)}
                    {renderButton('What is DNS armor', 3)}
                </div>
            </div>
            <div className="container text-center mt-3">
                <div className="row">
                    {renderButton('Advantages of DNS armor', 4)}
                    {renderButton('Key Features of DNS armor', 5)}
                    {renderButton('Applications of DNS armor', 6)}
                    {renderButton('Datasheet', 7)}
                </div>
            </div>
        </>
    );
};

export default ButtonGrid;
