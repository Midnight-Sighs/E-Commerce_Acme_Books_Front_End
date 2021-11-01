import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import MagicBook from '../../Images/BookCrystalBall.png'
import '../Styles/Pages.css'

const SellerPage = (props) =>{
    console.log(props)


    return ( 
        <> 
            <div className="bod-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
                <div className="mt-5">
                    <div className = "seller-page">
                        <p className="welcome">Welcome {props.currentUserID.userName}, this is your seller profile!</p>
                        <hr></hr>
                        <p><Link to="/NewBook">List new book for sale</Link></p>
                        <p><Link to="/BookListing">View my book listings</Link></p>
                    </div>
                </div>
            </div>
        </>
     );
}

export default SellerPage;
