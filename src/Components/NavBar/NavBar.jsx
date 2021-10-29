import React, {useState, useEffect} from 'react'
import '../Styles/Components.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

const NavBar = (props) =>{
    console.log(props.status)

    const[anon, setAnon] = useState(true);
    // const[buyer, setBuyer] = useState(false);
    const[seller, setSeller] =useState(false);

    useEffect(()=>{
        let loggedIn = props.loggedIn
        checkPageType(loggedIn)
    }, [props])

    const logoutStateToggle=()=>{
        debugger
        setAnon(true)
        setSeller(false)
    }

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
                <SearchBar formSubmission={props.formSubmission} />
            </div>
            <div className="col-4 nav-links">
                <a href="/"><span>|  Books  </span></a>
                {anon ? <span>|  <a href="/login"> Login </a> </span> :null}
                {anon ? <span> |  <a href="/register"> Register </a> </span>:null}
                {seller ? <span>|  <Link to="/logout" onClick = {logoutStateToggle}> Logout </Link></span>: null}
                {seller ? <span>|  <a href="/profile/edit"> Edit Profile </a> </span>: null}
                {seller ? <span>|  <a href="/cart">Cart</a></span>:null}
                <a href="/Randy"><span>|  Randy</span></a>
                {/* {buyer ? <span>|  New Product </span>:null} */}
            </div>

        </div>
        </>
     );
}

export default NavBar;