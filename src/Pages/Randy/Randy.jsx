import React, {Component} from 'react'
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { Button} from 'react-bootstrap';


class Randy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.props,
            books:[],
            shoppingCart:[],
            CartEmpty:true
        }
        console.log(props.props)
        console.log(this.state.user)
    }
    // getBooks = async () =>{
    //     const response = await axios.get('https://localhost:44394/api/book');
    //     this.setState({
    //       books: response.data
    //     }
    //     )
    //   }
    // addBookToShoppingCart = async (bookid) =>{

    //   const addBook = {
    //         Quantity: 1,
    //         UserId: this.state.user.id,
    //         BookId: bookid
    //     }
    //     console.log(addBook)
    //   const response = await axios.post('https://localhost:44394/api/shoppingCart/addBook/' + bookid, addBook);
    //   if (response === undefined) {
    //     console.log("error adding book", response);
    //   } else {
    //     console.log("book added", bookid)
    //   }
    // }
    // getShoppingCart = async () =>{
    //     const userid = this.state.user.id
    //     console.log(userid)
    //     const response = await axios.get('https://localhost:44394/api/shoppingCart/' + userid);
    //     this.setState({
    //       shoppingCart: response.data
    //     });
    //     console.log(response)
    // }    
    // componentDidMount() {
    //     this.getBooks();
    //     this.getShoppingCart();
    //     // this.getCurrentUser();
    //   }
    //<Button onclick={this.getCurrentUser()}> Activate Lasers </Button>
    render() {
        // console.log(this.state.books) 
        // console.log(this.state.user)
        // console.log(this.state.shoppingCart)
        return ( 
            <Container fluid>
              <Row>
                <Col sm={8}> Name: {this.state.user.firstName}</Col>
              </Row>
              <Row>
                <Col sm={8}>Books: <React.Fragment>{this.state.books.map((book) => {
                            return(
                                <li>{book.title} <Link to="/Randy" onClick={() => this.addBookToShoppingCart(book.bookId)}>Add To cart</Link></li>
                            )
                        })}</React.Fragment>
                </Col>
              </Row>
              <Row>
                <Col> <Button onclick={this.getShoppingCart()}> Activate Lasers </Button>  Shopping Cart:</Col>
              </Row>
              <Row>
                <Col> <React.Fragment>{this.state.shoppingCart.map((cart) => {
                            return(
                                <li>Book ID: {cart.bookid}, Quatity: {cart.Quantity} </li>
                            )
                        })}</React.Fragment></Col>
              </Row>
            
            </Container>
                
         );
        
        }
    
}
 
export default Randy;