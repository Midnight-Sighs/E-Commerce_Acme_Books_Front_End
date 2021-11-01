import React from 'react'
import '../Styles/Components.css'
import FireHazard from '../../Images/FireHazard.jpg'

function Header() {
    return ( 
        <>
        <div className="head">
            <div className = "row">
                <img className="fire-hazard" src={FireHazard}></img>
                <div className="col-3">
                    <h1 className="title">Acme Books</h1>
                    <h3 className="sub-title">Online Inc</h3>
                </div>
                <div className="col-6"></div>
                <div className="col-3 log-reg">
                    <p></p>
                </div>
                
            </div>
        </div>
        </>
     );
}

export default Header;