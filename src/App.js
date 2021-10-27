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


const history = createHistory();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: [],
      user: [],
      currentUser: [],
      registeredUser: [],
    };

  };

  register = async (registerUser) => {
    console.log(registerUser);
    let response = await axios.post('http://localhost:62321/api/authentication', registerUser);
    console.log(response.data);
    if (response === undefined) {
      this.setState({});
    } else {
      this.setState({
        registeredUser: response.data,
      });
      console.log(registerUser);
    }
};

login = async (login) => {
    let response = await axios.post('http://localhost:62321/api/authentication/login/', login);
    if (response === undefined) {
      this.setState({});
    } else {
      this.setState({
        token: response.data,
        loggedIn: !this.state.loggedIn,
      });
      localStorage.setItem('token', this.state.token.token);
      console.log(this.state.token.token);
      console.log(this.state.user);
      this.productTable();
    }
  };

getCurrentUser = async () => {
  try{
    const jwt = localStorage.getItem('token');
    let response = await axios.get('http://localhost:62321/api/examples/user/', {headers: {Authorization: 'Bearer ' + jwt}});
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


  render() {

    return (
      <Container fluid>
        <Row>
          <Col><Header/></Col>
        </Row>
        <Row>
          <Col sm={3}><NavBar/></Col>
          
          <Col sm={9}>
          <Router history={history} forceRefresh={true}>
            <Switch >                
              <Route exact path="/" render={() => <Anon/>}/>
              
              <Route
              exact path='/login'
              render={() => <LoginPage/>}
              />

              <Route
              exact path='/register'
              render={() => <RegisterPage register={this.register}/>}
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
