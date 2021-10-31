import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import MagicBook from '../../Images/BookCrystalBall.png';
import '../Styles/Pages.css'
import ReadingMan from '../../Images/ReadingMan.jpg'
import { withRouter } from 'react-router-dom';
import axios from 'axios';
console.log(window.location.pathname)
var pathArray = window.location.pathname.split('/');
var secondLevelLocation = pathArray[2];
console.log(secondLevelLocation)

class RegisterPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            User:[],
            UserId:secondLevelLocation,
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
        console.log(this.props)
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
            if (this.state.seller == true){
                alert(`${this.state.firstname} can now sell books`)
            }
        } catch (err) {
            console.log(err);
        }

    }


    render(){
        return(
            <div className="bod-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
                <div className="row edit-profile-row">
                    <Col sm={5}>
                        <h1>Welcome {this.state.firstname}</h1>
                        <p>You're on your profile page!  If you misspelled your name, e-mail, or anything else, you can fix it here!  Here is where you can also enter your super secret code to become a seller.  We take selling serious, here, so you have to be approved to be a seller!  Contact us for more information!  Happy book buying!</p>
                    </Col>
                    <Col sm={6}>
                        <Form  className="profile-form" onSubmit ={this.handleSubmit}>
                            <Form.Group controlId="formBasicRegister">

                            <Row>
                                <Col sm={6}>
                                    <Form.Label className="pro-label">First Name</Form.Label>
                                    <Form.Control className="pro-field" type='text' name='firstname' placeholder={this.state.firstname} onChange={this.handleChange} value={this.state.firstname}/>
                                </Col>
                                <Col sm={6}>
                                    <Form.Label className="pro-label">Last Name</Form.Label>
                                    <Form.Control className="pro-field" type='text' name='lastname' onChange={this.handleChange} value={this.state.lastname}/>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={12}>
                                    <Form.Label className="pro-label" >Email</Form.Label>
                                    <Form.Control className="pro-field" type='text' name='email' onChange={this.handleChange} value={this.state.Email}/>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={4}>
                                    <Form.Label className="pro-label">Street</Form.Label>
                                    <Form.Control className="pro-field" type='text' name='street' onChange={this.handleChange} value={this.state.street}/>
                                </Col>
                                <Col sm={3}>
                                    <Form.Label className="pro-label">City</Form.Label>
                                    <Form.Control className="pro-field" type='text' name='city' onChange={this.handleChange} value={this.state.city}/>
                                </Col>
                                <Col sm={2}>
                                    <Form.Label className="pro-label">State</Form.Label>
                                    <Form.Control className="pro-field" type='text' name='state' onChange={this.handleChange} value={this.state.state}/>
                                </Col>
                                <Col sm={2}>
                                    <Form.Label className="pro-label">Zip</Form.Label>
                                    <Form.Control className="pro-field" type='text' name='zip' onChange={this.handleChange} value={this.state.zip}/>
                                </Col>
                                <Col sm={4}>
                                    <Form.Label className="pro-label">Code to become a seller:</Form.Label>
                                    <Form.Control className="pro-field" type='text' name='sellerCode' onChange={this.handleChange} value={this.state.sellerCode}/>
                                </Col>
                            </Row>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicButton">
                            <button className="pro-btn basic-btns" type='submit' value='Submit'>Update Profile!</button>
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