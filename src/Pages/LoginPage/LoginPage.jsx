import React, { Component } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import MagicBook from '../../Images/BookCrystalBall.png';
import '../Styles/Pages.css'

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const login = {
            username: this.state.username,
            password: this.state.password,
        }
        this.props.currentUser();
        this.props.login(login);
        this.setState({
            username: '',
            password: '',
        });
    }

    render(){
        return(
            <>
            <div className="bod-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
                <div className ="row login-page-row">    
                    <div className="col-5 mx-5"> 
                        <br />INSERT IMAGE HERE
                        <br />INSERT IMAGE HERE
                        <br />INSERT IMAGE HERE
                        <br />INSERT IMAGE HERE
                        <br />INSERT IMAGE HERE
                        <br />INSERT IMAGE HERE
                    </div>
                    <div className="col-6">
                        <Form className = "login-form" onSubmit ={this.handleSubmit}>
                            <Form.Group className="mb-3" controlId="Login">
                            <Row>
                                <Col sm={3}>
                                    <Form.Label className="login-label">Username</Form.Label>
                                    <Form.Control className="login-field" type='text' name='username' onChange={this.handleChange} value={this.state.username}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={3}>
                                    <Form.Label className="login-label">Password</Form.Label>
                                    <Form.Control className="login-field" type='text' name='password' onChange={this.handleChange} value={this.state.password}/>
                                </Col>
                            </Row>
                            
                            </Form.Group>
                            <button className="basic-btns" type='submit'>Login</button>
                        </Form>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
export default LoginPage;