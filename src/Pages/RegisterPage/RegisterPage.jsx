import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

class RegisterPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            email: "",
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
            username: this.state.username,
            password: this.state.password,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            street: this.state.street,
            city: this.state.city,
            state: this.state.city,
            zip: this.state.zip

        }
        console.log(user)
        this.props.register(user);
        this.setState({
            username: "",
            password: "",
            firstname: "",
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
            <div>
                <Form onSubmit ={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicRegister">
                    <Row>
                        <Col sm={4}>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type='text' name='username' onChange={this.handleChange} value={this.state.username}/>
                        </Col>
                        <Col sm={4}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='text' name='password' onChange={this.handleChange} value={this.state.password}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={4}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type='text' name='firstname' onChange={this.handleChange} value={this.state.firstname}/>
                        </Col>
                        <Col sm={4}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type='text' name='lastname' onChange={this.handleChange} value={this.state.lastname}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={8}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='text' name='email' onChange={this.handleChange} value={this.state.email}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={4}>
                            <Form.Label>Street</Form.Label>
                            <Form.Control type='text' name='street' onChange={this.handleChange} value={this.state.street}/>
                        </Col>
                        <Col sm={2}>
                            <Form.Label>City</Form.Label>
                            <Form.Control type='text' name='city' onChange={this.handleChange} value={this.state.city}/>
                        </Col>
                        <Col sm={1}>
                            <Form.Label>State</Form.Label>
                            <Form.Control type='text' name='state' onChange={this.handleChange} value={this.state.state}/>
                        </Col>
                        <Col sm={1}>
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type='text' name='zip' onChange={this.handleChange} value={this.state.zip}/>
                        </Col>
                    </Row>



                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicButton">
                    <Button variant="outline-success" type='submit' value='Submit'>Register Account</Button>{' '}
                    <Button variant="outline-danger" type='reset' value='reset'>Clear Form</Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}
export default RegisterPage;