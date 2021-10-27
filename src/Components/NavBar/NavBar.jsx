import React, {useState, useEffect} from 'react'
import '../Styles/Components.css'

const NavBar = (props) =>{

    // const[anon, setAnon] = useState(true);
    // const[buyer, setBuyer] = useState(false);
    // const[seller, setSeller] =useState(false);

    // useEffect(()=>{
    //     let currentPage = props.currentPage
    //     checkPageType(currentPage)
    // }, [props])

    // const checkPageType=(page)=>{
    //     if(page.currentPage == "anon" ){
    //         setAnon(true);
    //     }
    //     if(page.currentPage == "buyer"){
    //         setBuyer(true);
    //         setSeller(true);
    //         setAnon(false);
    //     }
    //     if(page.currentPage == "seller"){
    //         setSeller(true);
    //         setAnon(false);
    //     }
    // }

    return ( 
        <> 
        <div className="row nav-bar">
            <div className="col-2">
                
            </div>
            <div className="col-6">
                {/*Search Bar Here*/}
            </div>
            <div className="col-4 nav-links">
                {/* {anon ? <span>|  Login</span> :null}
                {anon ? <span> |  Register </span>:null}
                {seller ? <span>|  Logout</span>: null}
                {seller ? <span>|  Edit Profile </span>: null}
                {seller ? <span>|  Cart</span>:null}
                {buyer ? <span>|  New Product </span>:null} */}
            </div>

        </div>
        </>
     );
}

export default NavBar;