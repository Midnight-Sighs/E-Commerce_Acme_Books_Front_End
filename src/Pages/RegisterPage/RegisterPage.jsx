import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import MagicBook from '../../Images/BookCrystalBall.png';
import '../Styles/Pages.css'

class RegisterPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            Email: "",
            street: "",
            city: "",
            state: "",
            zip: "",
            
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            UserName: this.state.username,
            Password: this.state.password,
            FirstName: this.state.firstname,
            LastName: this.state.lastname,
            Email: this.state.email,
            streetaddress: this.state.street,
            City: this.state.city,
            State: this.state.state,
            ZipCode: this.state.zip

        }
        console.log(user)
        this.props.register(user);
        this.setState({
            username: "",
            password: "",
            FirstName: "",
            lastname: "",
            email: "",
            street: "",
            city: "",
            state: "",
            zip: ""
        });
    }

    render(){
        return(
            <div className="bod-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
                

                
                <div>
                    <Form onSubmit ={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicRegister">
                        <Row>
                            <Col sm={4}>
                                <Form.Label className="reg-label" >Username</Form.Label>
                                <Form.Control className="reg-field" type='text' name='username' onChange={this.handleChange} value={this.state.username}/>
                            </Col>
                            <Col sm={4}>
                                <Form.Label className="reg-label">Password</Form.Label>
                                <Form.Control className="reg-field" type='text' name='password' onChange={this.handleChange} value={this.state.password}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={4}>
                                <Form.Label className="reg-label">First Name</Form.Label>
                                <Form.Control className="reg-field" type='text' name='firstname' onChange={this.handleChange} value={this.state.firstname}/>
                            </Col>
                            <Col sm={4}>
                                <Form.Label className="reg-label">Last Name</Form.Label>
                                <Form.Control className="reg-field" type='text' name='lastname' onChange={this.handleChange} value={this.state.lastname}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={8}>
                                <Form.Label className="reg-label" >Email</Form.Label>
                                <Form.Control className="reg-field" type='text' name='email' onChange={this.handleChange} value={this.state.email}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={4}>
                                <Form.Label className="reg-label">Street</Form.Label>
                                <Form.Control className="reg-field" type='text' name='street' onChange={this.handleChange} value={this.state.street}/>
                            </Col>
                            <Col sm={2}>
                                <Form.Label className="reg-label">City</Form.Label>
                                <Form.Control className="reg-field" type='text' name='city' onChange={this.handleChange} value={this.state.city}/>
                            </Col>
                            <Col sm={1}>
                                <Form.Label className="reg-label">State</Form.Label>
                                <Form.Control className="reg-field" type='text' name='state' onChange={this.handleChange} value={this.state.state}/>
                            </Col>
                            <Col sm={1}>
                                <Form.Label className="reg-label">Zip</Form.Label>
                                <Form.Control className="reg-field" type='text' name='zip' onChange={this.handleChange} value={this.state.zip}/>
                            </Col>
                        </Row>

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicButton">
                        <button className="basic-btns" type='submit' value='Submit'>Register Account</button>{' '}
                        <button className="basic-btns" type='reset' value='reset'>Clear Form</button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        );
    }
}
export default RegisterPage;