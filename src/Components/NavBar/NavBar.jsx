import React, {useState, useEffect} from 'react'
import '../Styles/Components.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

const NavBar = (props) =>{
    console.log(props.userid)
    let userid = props.userid

    const[anon, setAnon] = useState(true);
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

    const onClickLogout=()=>{
        props.logout();
        logoutStateToggle();
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
    let editProfileURL = "/profile/edit/" + userid
    return ( 
        <> 
        <div className="row nav-bar">
            <div className="col-1">
                
            </div>
            <div className="col-4">
                <SearchBar formSubmission={props.formSubmission} books={props.books} />
            </div>
            <div className="col-6 nav-links">
            <span> <a href="/"> Home </a> </span>
                {anon ? <span>|  <a href="/login"> Login </a> </span> :null}
                {anon ? <span> |  <a href="/register"> Register </a> </span>:null}
                {anon ? <span>|  <a href="/profile/edit/{userid}"> Edit Profile - anon </a> </span>: null}
                {seller ? <span>|  <a href="/logout" onClick={onClickLogout}> Logout </a></span>: null}
                {buyer ? <span>|  <a href="/logout" onClick={onClickLogout}> Logout </a></span>: null}
                {seller ? <span>|  <a href="/profile/edit/{userid}"> Edit Seller Profile </a> </span>: null}
                {seller ? <span>|  <a href="/Seller"> Seller Menu </a> </span>: null}
                {buyer ? <span>|  <a href={editProfileURL}> Edit Buyer Profile </a> </span>: null}
                {seller ? <span>|  <a href="/cart">Cart</a></span>:null}
                {buyer ? <span>|  <a href="/cart">Cart</a></span>:null}
                <a href="/Randy"><span>|  Randy</span></a>
                {/* {buyer ? <span>|  New Product </span>:null} */}
            </div>
            <div className="col-1"></div>
        </div>
        </>
     );
}

export default NavBar;