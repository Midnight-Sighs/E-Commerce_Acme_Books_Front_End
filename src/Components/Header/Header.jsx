import React from 'react'
import '../Styles/Components.css'

function Header() {
    return ( 
        <>
        <div className="head">
            <div className = "row">
                <div className="col-3">
                    <h1 className="title">Acme Books</h1>
                    <h3 className="title">Online Inc</h3>
                </div>
                <div className="col-6">{/*Search Bar Here*/}</div>
                <div className="col-3 log-reg">
                    <p><a href='/login'>Login</a>   |   <a href='/register'>Register</a></p>
                </div>
                
            </div>
        </div>
        </>
     );
}

export default Header;