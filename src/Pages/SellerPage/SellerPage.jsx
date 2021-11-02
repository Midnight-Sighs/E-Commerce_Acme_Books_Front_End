import React from 'react'
import {Link} from 'react-router-dom'
import MagicBook from '../../Images/BookCrystalBall.png'
import '../Styles/Pages.css'

const SellerPage = (props) =>{

    return ( 
        <> 
            <div className="bod-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
                    <div className = "seller-page">
                        <p className="welcome">Welcome {props.currentUserID.userName}, this is your seller profile!</p>
                        <hr></hr>
                        <p><Link to="/NewBook">List new book for sale</Link></p>
                        <p><Link to="/BookListing">View my book listings</Link></p>
                    </div>
                </div>
        </>
     );
}

export default SellerPage;
