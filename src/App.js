import React, { Component } from 'react';
import './Styles/App.css';
import { BrowserRouter as Switch, Route, Router} from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import Anon from './Pages/AnonPage/Anon'
import LoginPage from './Pages/LoginPage/LoginPage'


const history = createHistory();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

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

            </Switch>
          </Router>
          </Col>
        </Row>

    </Container>
  );
  }
}

export default App;
