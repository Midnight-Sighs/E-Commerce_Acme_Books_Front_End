import React, { Component } from 'react';
import './Styles/App.css';
import { BrowserRouter as Switch, Route, Router} from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import Anon from './Pages/AnonPage/Anon'
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import EditProfile from './Pages/EditProfile/EditProfile'


const history = createHistory();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: [],
      user: [],
      currentUser: [],
      registeredUser: [],
      loggedIn: false
    };

  };

  register = async (registerUser) => {
    console.log(registerUser);
    let response = await axios.post('https://localhost:44394/api/authentication/', registerUser);
    console.log(response.data);
    if (response === undefined) {
      this.setState({});
    } else {
      this.setState({
        registeredUser: response.data,
      });
      console.log(registerUser);
    }
  }
  catch(err) {
    console.log(err);
  }

  loginUser = async(login) => {
    try{
      let response = await axios.post('https://localhost:44394/api/authentication/login', login);
      if (response === undefined) {
        this.setState({});
      } 
      else {
        this.setState({
          token: response.data,
          loggedIn: !this.state.loggedIn,
        });
        localStorage.setItem('token', this.state.token.token);
        console.log(this.state.token.token);
        console.log(this.state.user);
        
      }
    }
    catch(err) {
      console.log(err);
    }

  }
  

getCurrentUser = async () => {
  try{
    const jwt = localStorage.getItem('token');
    let response = await axios.get('https://localhost:44394/api/examples/user/', {headers: {Authorization: 'Bearer ' + jwt}});
    if (response === undefined) {
      this.setState({});
    } 
    else {
      this.setState({
        user: response.data,
      });
      console.log(this.state.user)
    }
  }
  catch(err) {
    console.log(err);
  }
};

logoutUser = () => {
  localStorage.removeItem('token');
  window.location = "/";
  this.setState({
    loggedIn: false,
    currentUser: [],
  })
}



  render() {
    console.log(this.state.user);
    return (
      <Container fluid>
        <div>
          <a href="/"> Home </a>
          <a href="/login"> Login </a> 
          <a href="/logout"> Logout </a>
          <a href="/register"> Register </a>
          <a href="/profile/edit"> Edit Profile </a>
          <a href="/books"> View books</a>
        </div>
        <Row>
          <Col><Header/></Col>
        </Row>
        <Row>
          <NavBar/>
          
          <Col sm={12}>
          <Router history={history} >
            <Switch >                
              <Route exact path="/" render={() => <Anon/>}/>
              
              <Route
              exact path='/login'
              render={() => <LoginPage  login={this.loginUser} currentUser={this.getCurrentUser}/>}
              />

              <Route
              exact path='/register'
              render={() => <RegisterPage register={this.register}/>}
              />

              <Route
              exact path='/profile/edit'
              render={() => <EditProfile user={this.state.user}/>}
              />

            </Switch>
          </Router>
          </Col>
        </Row>

    </Container>
  );
  }
}
 
export default App;
