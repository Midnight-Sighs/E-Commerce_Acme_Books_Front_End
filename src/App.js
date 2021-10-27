import React, { Component } from 'react';
import './Styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import Anon from './Pages/AnonPage/Anon'
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import EditProfile from './Pages/EditProfile/EditProfile'
import SearchBar from './Components/SearchBar/SearchBar'


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
  // history = useHistory();
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.loggedIn !== this.state.loggedIn) {
  //     history.push("/")
  //   }  
  // }


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

getShoppingCart = async () =>{
  const response = await axios.get('http://localhost:62321/api/shoppingCart');
  this.setState({
    shoppingCart: response.data
  });
}
removeBookFromShoppingCart = async () =>{
  const response = await axios.delete('http://localhost:62321/api/shoppingCart/delete/${}');
  this.setState({
    shoppingCart: response.data
  });
}
addBookToShoppingCart = async () =>{
  const response = await axios.post('http://localhost:62321/api/shoppingCart/addBook${}');
  this.setState({

  })
}
getReviews = async () =>{
  const response = await axios.get('http://localhost:62321/api/reviews');
  this.setState({
    reviews: response.data
  })
}
postReview = async () =>{
  const response = await axios.post('http://localhost:62321/api/reviews/create');
  this.setState({

  })
}
editReviews = async () =>{
  const response = await axios.patch('http://localhost:62321/api/review/edit${}');
  this.setState({

  })
}
deleteReview = async () =>{
  const response = await axios.delete('http://localhost:62321/api/review/delete/${}');
  this.setState({

  })
}
getBooks = async () =>{
  const response = await axios.get('http://localhost:62321/api/book');
  this.setState({
    books: response.data
  })
}
getOneBook = async () =>{
  const response = await axios.get('http://localhost:62321/api/book/${}');
  this.setState({

  })
}
addBook = async () =>{
  const response = await axios.post('http://localhost:62321/api/book');
  this.setState({

  })
}

editBook = async () =>{
  const response = await axios.patch('http://localhost:62321/api/book/edit/${}');
  this.setState({

  })
}
deleteBook = async () =>{
  const response = await axios.get('http://localhost:62321/api/book/delete/${}');
  this.setState({

  })
}


  render() {
    console.log(this.state.token.token);
    console.log(this.state.user);
    console.log(this.state.loggedIn);
    return (
      <Container fluid>
        <div>
        <Link to="/"> ::Home::  </Link>
        <Link to="/login">  ::Login::  </Link>
        <Link to="/logout">  ::Logout::  </Link> {/* <a href="/logout"> Logout </a> */}
          <Link to="/register">  ::Register::  </Link>
          <Link to="/profile/edit">  ::Profile edit::  </Link>
          <Link to="/books">  ::view books::  </Link>
        </div>
        <Row>
          <Col><Header/></Col>
        </Row>
        <Row>
          <NavBar/>
          <SearchBar formSubmission={this.getBooks}/>
        </Row>
        <Row>
          <Col sm={3}><NavBar/></Col>
          
          <Col sm={12}>
            <Switch >                
              <Route exact path="/" render={() => <Anon/>}/>
              
              <Route
              exact path='/login'
              render={() => <LoginPage login={this.loginUser} currentUser={this.getCurrentUser}/>}
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
           </Col>
        </Row>

    </Container>
  );
  }
}
 
export default App;
