import React, { Component } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";

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
            <div class="col-sm">
                <Form onSubmit ={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="Login">
                    <Row>
                    <Col>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' name='username' onChange={this.handleChange} value={this.state.username}/>
                    </Col>
                    <Col>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='text' name='password' onChange={this.handleChange} value={this.state.password}/>
                    </Col>
                    </Row>
                    </Form.Group>
                    <Button variant="outline-primary" type='submit'>Login</Button>
                </Form>
            </div>
        );
    }
}
export default LoginPage;