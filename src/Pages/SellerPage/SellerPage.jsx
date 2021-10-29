import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

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
        <p>Welcome Seller {props.currentUserID.userName}, would you like to play a game?</p>
        <hr></hr>
        <p><li><Link to="/NewBook">List new book for sale</Link></li></p>
        <p><li><Link to="/NewBook">View my book listings</Link></li></p>
        </>
     );
}

export default SellerPage;
