import React, { Component } from 'react';
import './Styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import Anon from './Pages/AnonPage/Anon'
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import EditProfile from './Pages/EditProfile/EditProfile'
import MainShop from './Pages/MainShop/MainShop'
import MainBody from './Components/MainShop/MainBody'
// import SearchBar from './Components/SearchBar/SearchBar'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localToken: localStorage.token,
      token: [],
      user: [],
      currentUser: [],
      registeredUser: [],
      loggedIn: false,
      books:[]
    };

  };
  componentDidMount() {
    this.getCurrentUser();
  }
 


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

  loginUser = async(login) => {
    try{
      let response = await axios.post('https://localhost:44394/api/authentication/login', login);
      if (response === undefined) {
        this.setState({});
      } 
      else {
        this.setState({
          token: response.data.token,
          loggedIn: true,
        });
        localStorage.setItem('token', this.state.token);
        console.log(this.state.token);
        console.log(this.state.user);
      }
    }
    catch(err) {
      console.log(err);
    }
    

  }


getCurrentUser = async () => {
  try{
    console.log("Getting current user")
    const jwt = localStorage.getItem('token');
    let response = await axios.get('https://localhost:44394/api/examples/user/', {headers: {Authorization: 'Bearer ' + jwt}});
    if (response === undefined) {
      this.setState({});
    } 
    else {
      console.log(response.data)
      this.setState({
        user: response.data,
        loggedIn: true
      });
      console.log(this.state.user)
    }
  }
  catch(err) {
    console.log(err);
  }
  this.getBooks()
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
deleteReview = async (reviewID) =>{
  const response = await axios.delete('http://localhost:62321/api/review/delete/' + reviewID);
  this.setState({

  })
}
getBooks = async () =>{
  const response = await axios.get('https://localhost:44394/api/book');
  this.setState({
    books: response.data
  }
  )
  console.log(this.state.books)
}
getOneBook = async (bookId) =>{
  const response = await axios.get('http://localhost:62321/api/book/' + bookId);
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
// logoutUser = () =>{
//   window.location = "/";
//   this.setState({
//     loggedIn: false,
//     currentUser: []
//   })
// }


  render() {
    console.log(this.state.localToken)
    console.log(this.state.token)
    if (!this.state.token) {
      console.log("There is no token")
      if(this.state.localToken){
        console.log("there is a local token though")
        this.getCurrentUser();
      }
      
    }
    console.log(this.state.books)
    console.log(this.state.loggedIn)
    return (
      <Container fluid>
        <Row>
          <Col><Header/></Col>
        </Row>
        <Row>
          
          
          <Col sm={12}>
          <Router >
            <NavBar loggedIn={this.state.loggedIn} logout={this.logoutUser}/>
            <Switch >   
              {this.state.loggedIn ? <Route exact path="/" render={() => <MainBody props={this.state.books}/>}/> : <Route exact path="/" render={() => <Anon/>}/>}             
              {/* <Route exact path="/" render={() => <Anon/>}/>
              <Route exact path="/" render={() => <MainShop/>}/> */}

              <Route
              exact path='/login'
              render={() => <LoginPage login={this.loginUser} currentUser={this.getCurrentUser}/>}
              />

              {/* <Route
              exact path='/logout'
              render={() => <LogoutPage />}
              /> */}

              <Route
              exact path='/register'
              render={() => <RegisterPage register={this.register}/>}
              />

              <Route
              exact path='/profile/edit'
              render={() => <EditProfile user={this.state.user}/>}
              />
              {/* <Route
              exact path='/books'
              render={() => <MainBody props={this.state.books}/>}
              /> */}

            </Switch>
            </Router>
          </Col>
        </Row>

    </Container>
  );
  };
}
 
export default App;
