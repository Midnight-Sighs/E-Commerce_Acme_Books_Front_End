import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import MagicBook from '../../Images/BookCrystalBall.png';
import '../Styles/Pages.css'
import ReadingMan from '../../Images/ReadingMan.jpg'
import {withRouter} from 'react-router-dom';

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
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zip

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
        this.props.history.push('/');
    }

    render(){
        return(
            <div className="bod-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
                <div className="row reg-row">
                    <Col sm={5}>
                        <h1>You're never too old to find magic in reading...</h1>
                        <img className="reading-man"src={ReadingMan}></img>
                    </Col>
                    <Col sm={6}>
                        <Form className="reg-form" onSubmit ={this.handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicRegister">
                            <Row>
                                <Col sm={6}>
                                    <Form.Label className="reg-label" >Username</Form.Label>
                                    <Form.Control className="reg-field" type='text' name='username' onChange={this.handleChange} value={this.state.username}/>
                                </Col>
                                <Col sm={6}>
                                    <Form.Label className="reg-label">Password</Form.Label>
                                    <Form.Control className="reg-field" type='password' name='password' onChange={this.handleChange} value={this.state.password}/>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={6}>
                                    <Form.Label className="reg-label">First Name</Form.Label>
                                    <Form.Control className="reg-field" type='text' name='firstname' onChange={this.handleChange} value={this.state.firstname}/>
                                </Col>
                                <Col sm={6}>
                                    <Form.Label className="reg-label">Last Name</Form.Label>
                                    <Form.Control className="reg-field" type='text' name='lastname' onChange={this.handleChange} value={this.state.lastname}/>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={12}>
                                    <Form.Label className="reg-label" >Email</Form.Label>
                                    <Form.Control className="reg-field" type='email' name='email' onChange={this.handleChange} value={this.state.email}/>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={4}>
                                    <Form.Label className="reg-label">Street</Form.Label>
                                    <Form.Control className="reg-field" type='text' name='street' onChange={this.handleChange} value={this.state.street}/>
                                </Col>
                                <Col sm={3}>
                                    <Form.Label className="reg-label">City</Form.Label>
                                    <Form.Control className="reg-field" type='text' name='city' onChange={this.handleChange} value={this.state.city}/>
                                </Col>
                                <Col sm={2}>
                                    <Form.Label className="reg-label">State</Form.Label>
                                    <Form.Control className="reg-field" type='text' name='state' onChange={this.handleChange} value={this.state.state}/>
                                </Col>
                                <Col sm={2}>
                                    <Form.Label className="reg-label">Zip</Form.Label>
                                    <Form.Control className="reg-field" type='text' name='zip' onChange={this.handleChange} value={this.state.zip}/>
                                </Col>
                            </Row>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicButton">
                            <button className="reg-button" type='submit' value='Submit'>Register Account</button>{' '}
                            <button className="reg-button" type='reset' value='reset'>Clear Form</button>
                            </Form.Group>
                        </Form>
                        <Col sm={1}>
                        </Col>
                    </Col>
                </div>
            </div>
        );
    }
}
export default withRouter (RegisterPage);