import React, {useState, useEffect} from 'react'
import '../Styles/Components.css'
import {
    Link
  } from "react-router-dom";

const NavBar = (props) =>{
    console.log(props.status)

    const[anon, setAnon] = useState(true);
    // const[buyer, setBuyer] = useState(false);
    const[seller, setSeller] =useState(false);

    useEffect(()=>{
        let loggedIn = props.loggedIn
        checkPageType(loggedIn)
    }, [props])

    const checkPageType=(loggedIn)=>{
        if(loggedIn === false ){
            setAnon(true);
            setSeller(false);
        }
        if(loggedIn === true){
            // setBuyer(true);
            setSeller(true);
            setAnon(false);
        }
        // if(loggedIn == "seller"){
        //     setSeller(true);
        //     setAnon(false);
        // }
    }

    return ( 
        <> 
        <div className="row nav-bar">
            <div className="col-2">
                
            </div>
            <div className="col-6">
                {/*Search Bar Here*/}
            </div>
            <div className="col-4 nav-links">
                {anon ? <span>|  <a href="/login"> Login </a> </span> :null}
                {anon ? <span> |  <a href="/register"> Register </a> </span>:null}
                {seller ? <span>|  <a href="/logout"> Logout </a></span>: null}
                {seller ? <span>|  <a href="/profile/edit"> Edit Profile </a> </span>: null}
                {seller ? <span>|  <a href="/cart">Cart</a></span>:null}
                {/* <Link to="/books">  ::view books::  </Link> */}
                {/* {buyer ? <span>|  New Product </span>:null} */}
            </div>

        </div>
        </>
     );
}

export default NavBar;