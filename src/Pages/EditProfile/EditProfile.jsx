import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import MagicBook from '../../Images/BookCrystalBall.png';
import '../Styles/Pages.css'
import ReadingMan from '../../Images/ReadingMan.jpg'
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class RegisterPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            User:[],
            UserId:props.props,
            firstname: "",
            lastname: "",
            Email: "",
            street: "",
            city: "",
            state: "",
            zip: "",
            sellerCode:""
            
        }
    }
    componentDidMount() {
        console.log(this.state.UserId)
        console.log(this.props.user)
        this.getCurrentUser()

        this.setState ({
            UserId: this.props.user,
        })
      }
      getCurrentUser = async () => {
        try{
          let getURL = 'https://localhost:44394/api/users/' + this.props.user
          console.log(getURL)
          let response = await axios.get(getURL);
          if (response === undefined) {
            this.setState({});
          } 
          else {
            console.log(response.data[0].email)
            this.setState({
              User: response.data,
              firstname: response.data[0].firstName,
              lastname: response.data[0].lastName,
              Email: response.data[0].email,
              street: response.data[0].streetAddress,
              city: response.data[0].city,
              state: response.data[0].state,
              zip: response.data[0].zipCode,
            });
          }
          console.log(this.state.User)
        }
        catch(err) {
          console.log(err);
        }};

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let seller = false
        if(this.state.sellerCode == "SqueezeMe"){
            seller = true
        }
        const userEdit = {
            FirstName: this.state.firstname,
            LastName: this.state.lastname,
            Email: this.state.email,
            streetaddress: this.state.street,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zip,
            type: seller
        }
        console.log(userEdit)
        try {
            let getURL = 'https://localhost:44394/api/users/' + this.props.user

            axios.put(getURL, userEdit)
            alert(`${this.state.firstname} has been edited`)
        } catch (err) {
            console.log(err);
        }

    }


    render(){
        return(
            <div className="bod-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
                <div className="row login-row">
                    <Col sm={5}>
                        <h1>You're never too old to find magic in reading...</h1>
                        <img className="reading-man"src={ReadingMan}></img>
                    </Col>
                    <Col sm={6}>
                        <Form onSubmit ={this.handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicRegister">

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
                                    <Form.Control className="reg-field" type='text' name='email' onChange={this.handleChange} value={this.state.Email}/>
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
                                <Col sm={4}>
                                    <Form.Label className="reg-label">Code to become a seller:</Form.Label>
                                    <Form.Control className="reg-field" type='text' name='street' onChange={this.handleChange} value={this.state.sellerCode}/>
                                </Col>
                            </Row>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicButton">
                            <button className="basic-btns" type='submit' value='Submit'>Update Profile!</button>
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