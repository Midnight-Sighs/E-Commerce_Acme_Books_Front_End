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
import BookDetails from './Components/BookDetails/BookDetails'
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
      books:[],
      singleBookId: "",
      singleBook: [],
      newReview: "",
      allReviews: []
    };

  };
  componentDidMount() {
    this.getCurrentUser();
  }

// componentDidUpdate(prevState) {
//   if (prevState.singleBookId !== this.state.singleBookId) {
//     this.getOneBook(this.state.singleBookId);
//   }
// }

//#region Axios User Requests
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
        console.log(response.data)
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
  this.getReviews()
};

//#endregion 

//#region Axios cart requests
getShoppingCart = async () =>{
  const response = await axios.get('https://localhost:62321/api/shoppingCart');
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
//#endregion

//#region Axios Reviews
getReviews = async () =>{
  const response = await axios.get('https://localhost:44394/api/reviews');
  this.setState({
    allReviews: response.data
  })
}
postReview = async () =>{
  const response = await axios.post('https://localhost:62321/api/reviews/create');
  this.setState({

  })
}
editReviews = async () =>{
  const response = await axios.patch('https://localhost:62321/api/review/edit${}');
  this.setState({

  })
}
deleteReview = async (reviewID) =>{
  const response = await axios.delete('https://localhost:62321/api/review/delete/' + reviewID);
  this.setState({

  })
}
//#endregion

//#region Book Requests
getBooks = async () =>{
  const response = await axios.get('https://localhost:44394/api/book');
  this.setState({
    books: response.data
  }
  )
  console.log(this.state.books)
}
getOneBook = async () =>{
  try{
  const response = await axios.get(`https://localhost:44394/api/book/${this.state.singleBookId}/`);
  this.setState({
    singleBook : response.data
  })
  } catch(err){
    console.log("Single book error", err)
  }
}

addBook = async () =>{
  const response = await axios.post('https://localhost:62321/api/book');
  this.setState({

  })
}

editBook = async () =>{
  const response = await axios.patch('https://localhost:62321/api/book/edit/${}');
  this.setState({

  })
}
deleteBook = async () =>{
  const response = await axios.get('https://localhost:62321/api/book/delete/${}');
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

//#endregion

//#region setState
  setBookId = (Id) => {
    this.setState({
    singleBookId : Id
    }, () => {
      this.getOneBook(this.state.singleBookId);
    });
  }
//#endregion

  render() {
    console.log(this.state.localToken.role)
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
          <NavBar />
        </Row>
        <Row>
          
          
          <Col sm={12}>
          <Router >
            <Switch >
              <Route exact path="/" render={() => <Anon books={this.state.books} loggedIn={this.state.loggedIn}/>}/>

              <Route
              exact path='/login'
              render={() => <LoginPage login={this.loginUser} currentUser={this.getCurrentUser}/>}
              />

              <Route path='/details'  render={props => <BookDetails {...props} reviews={this.state.allReviews} setBookId={this.setBookId} singleBook={this.state.singleBook}/>} />

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
              exact path='/books'
              render={() => <MainShop reviews={this.state.allReviews} loggedIn={this.state.loggedIn} books={this.state.books} setBookId={this.setBookId}/>}
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
