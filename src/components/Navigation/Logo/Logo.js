import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
// import brain from'./brain.png';
import cow from './cow.jpg';

function Logo() {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" style={{ height: 150, width: 150 }}>
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop:'0'}} alt='logo' src={cow}/>
                    {/* <a href='https://www.freepik.com/vectors/logo'> LogoImage vector created by catalyststuff - www.freepik.com</a> */}
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;