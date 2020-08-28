import React from 'react';
import Navbar from './Navbar';
import "./Navbar.css";

function Header (){
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div className="navbar">
            <div>
                <h1>The Talks</h1>
            </div>
            <div> Interview Directory</div>
            <div>
                World Guide
            </div>
            </div> 
        </div>
    )
        
    
}
export default Header;