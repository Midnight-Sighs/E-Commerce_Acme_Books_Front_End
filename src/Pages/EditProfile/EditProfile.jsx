import React from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";


const EditProfile = ({user}) => {
    console.log(user)
    if (!user) {
        return <div>no user</div>;
    }

    return (
        <div>
        {user.firstName}
        </div>
        
    )
}
export default EditProfile;