import React from 'react'
import Logo from '../Logo/Logo'

function Navigation() {
    return (
        
            
            <nav style = {{display:'flex',justifyContent:"space-around",marginTop:"10px"}}>
                <Logo />
                <p className='f3 link dim black underline pa3 pointer'>About</p>
            </nav>
       
    )
}

export default Navigation
