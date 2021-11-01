import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import MagicBook from '../../Images/BookCrystalBall.png'
import '../Styles/Pages.css'

const SellerPage = (props) =>{
    console.log(props)

    const[anon, setAnon] = useState(true);
    // const[buyer, setBuyer] = useState(false);
    const[seller, setSeller] =useState(false);
    const[buyer, setBuyer] =useState(false);

    useEffect(()=>{
        let loggedIn = props.loggedIn
        checkPageType(loggedIn)
    }, [props])

    const logoutStateToggle=()=>{
        setAnon(true)
        setSeller(false)
    }

    const checkPageType=(loggedIn)=>{
        if(loggedIn === false ){
            setAnon(true);
            setSeller(false);
            setBuyer(false)

        }
        if(loggedIn === true){
            if(props.status === false){
                setBuyer(true);
                setSeller(false);
                setAnon(false);
                }
            else{
                setBuyer(false);
                setSeller(true);
                setAnon(false);
                }
            }
        // if(loggedIn == "seller"){
        //     setSeller(true);
        //     setAnon(false);
        // }
    }

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
