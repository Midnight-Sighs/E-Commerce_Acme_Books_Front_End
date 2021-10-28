import React from 'react';
// import { Form, Button, Row, Col } from "react-bootstrap";
import MagicBook from '../../Images/BookCrystalBall.png';
import '../Styles/Pages.css'

const EditProfile = ({user}) => {
    console.log(user)
    if (!user) {
        return <div>no user</div>;
    }

    return (
        <div>
            <div className="bod-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>

                ID #: {user.id}<br></br>
                Name: {user.firstName} {user.lastName}<br></br>
                Email: {user.email}<br></br>
                Address: {user.street}<br></br>
                {user.city} , {user.state} {user.zip}

            </div>   
        </div>
        
    )
}
export default EditProfile;