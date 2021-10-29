import React, { Component } from 'react';
import './Styles/App.css';
import { BrowserRouter as Switch, Route, Router} from "react-router-dom";
import {Link} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import Anon from './Pages/AnonPage/Anon'
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import CartPage from './Pages/CartPage/CartPage'
import EditProfile from './Pages/EditProfile/EditProfile'
import MainShop from './Pages/MainShop/MainShop'
import MainBody from './Components/MainShop/MainBody'
import { createBrowserHistory } from "history";
import BookDetailPage from './Pages/BookDetailPage/BookDetailPage'


const history = createBrowserHistory();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localToken: localStorage.token,
      token:[],
      user: [],
      currentUser: [],
      registeredUser: [],
      shoppingCart: [],
      loggedIn: false,
      books:[]
    };

  };
  componentDidUpdate(prevProps, prevState) {

    if (this.state.token !== prevState.token) { // Set a new state if token change
      console.log("starting componenet did update")
      this.getCurrentUserToken();
      this.getCurrentUser();
    }
  }
  componentDidMount() {
    this.getBooks();
    this.getShoppingCart();
    if(this.state.localToken || !this.state.token){
      console.log("starting componentDidMount token update")
      this.getCurrentUserToken();
    }
    else {
      this.setState({
        loggedIn: false,
      });}
  }
 
  //#region Users

  register = async (registerUser) => {
    let secondReg = registerUser
    let response = await axios.post('https://localhost:44394/api/authentication/', registerUser);
    if (response === undefined) {
      this.setState({});
    } else {
      this.setState({
        registeredUser: response.data,
      });
    };
    await axios.put('https://localhost:44394/api/users/editname/' + secondReg.UserName, secondReg)
    history.push("/login");
    history.go('/login');
  }

  loginUser = async(login) => {
    try{
      let response = await axios.post('https://localhost:44394/api/authentication/login', login);
      console.log(response)
      if (response === undefined) {
        this.setState({});
      } 
      else {
        console.log("setting token state, looks good")
        this.setState({
          token: response.data.token,
        });
        localStorage.setItem('token', response.data.token);
      }

    }
      catch(err) {
      console.log(err);
    }
    history.push("/");
    history.go('/');
  }

  getCurrentUserToken = async () => {
    console.log(localStorage.token)
      try{
        const jwt = localStorage.getItem('token');
        if (jwt === undefined) {
          this.setState({});
        } 
        else {
          this.setState({
            token: jwt,
            loggedIn: true
          });
        };
      }
      catch(err) {
        console.log(err);
      }};
    

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
        loggedIn: true
      });
    }
    console.log(this.state.user)
  }
  catch(err) {
    console.log(err);
  }};

  logoutUser = () =>{
    localStorage.removeItem('token');
    this.setState({
      loggedIn: false,
      currentUser: []
    })
    history.push("/");
  }

//#endregion  

  //#region Shopping Cart
getShoppingCart = async () =>{
  const response = await axios.get('https://localhost:44394/api/shoppingCart');
  this.setState({
    shoppingCart: response.data
  });
  console.log(response)
}
removeBookFromShoppingCart = async () =>{
  const response = await axios.delete('https://localhost:44394/api/shoppingCart/delete/${}');
  this.setState({
    shoppingCart: response.data
  });
}
addBookToShoppingCart = async () =>{
  const response = await axios.post('https://localhost:44394/api/shoppingCart/addBook${}');
  this.setState({

  })
}

  //#endregion 

  //#region Books
getBooks = async () =>{
  const response = await axios.get('https://localhost:44394/api/book');
  this.setState({
    books: response.data
  })
}
searchBooks = async (searchTerm) =>{
  if (searchTerm !== null && searchTerm !== ''){
    await axios.get(`https://localhost:44394/api/book/${searchTerm}`);
  }
  else{
    console.log("I'm sorry, we don't have any of these books")
  }
  const response = await axios.get('https://localhost:44394/api/book/${}');
  this.setState({
    book: response.data
  })
}
addBook = async () =>{
  const response = await axios.post('https://localhost:44394/api/book');
  this.setState({
    
  })
}

editBook = async () =>{
  const response = await axios.patch('https://localhost:44394/api/book/edit/${}');
  this.setState({

  })
}
deleteBook = async () =>{
  const response = await axios.get('https://localhost:44394/api/book/delete/${}');
  this.setState({

  })
}
// logoutUser = () =>{
//   localStorage.removeItem('token');
//   this.setState({
//     loggedIn: false,
//     currentUser: []
//   })
//   history.push("/");
// }


  render() {
    console.log("Am I logged in?" + this.state.loggedIn)
    return (
      <Container fluid>
        <Row>
          <Col><Header/></Col>
         Logged in:  {this.state.loggedIn}
          <Link to="/logout" onClick={() => this.logoutUser()}>Logout</Link>
        </Row>
        <Row>
          {/* <SearchBar formSubmission={this.searchBooks} /> */}
        </Row>
        <Row>
          
          
          <Col sm={12}>
          <Router history={history} >

            <NavBar status={this.state.user.type} loggedIn={this.state.loggedIn} logout={this.logoutUser}/>
            <Switch >   
              {this.state.loggedIn ? <Route exact path="/" render={() => <MainBody props={this.state.books} loggedIn={this.state.loggedIn} />}/> : <Route exact path="/" render={() => <Anon/>}/>}             
              {/* <Route exact path="/" render={() => <Anon/>}/>
              <Route exact path="/" render={() => <MainShop/>}/> */}

              <Route
              exact path='/login'
              render={() => <LoginPage login={this.loginUser}/>}
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
              
              <Route
              exact path='/cart'
              render={() => <CartPage shoppingCart={this.state.shoppingCart}/>}
              />
              
              <Route
              exact path='/BookDetail/:bookid'
              render={() => <BookDetailPage/>}
              />


            </Switch>
            </Router>
          </Col>
        </Row>

    </Container>
  );
  };
}
 
export default App;
