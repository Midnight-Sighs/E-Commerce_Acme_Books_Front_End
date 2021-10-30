import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { Container, Form, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom";
import '../Styles/Components.css';
import MagicBook from '../../Images/BookCrystalBall.png'

class BookListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            User:[],
            UserId: props.props,
            books:[],
            newBooks:[],
            filteredBooks:[]
        }
    }
    componentDidMount() {
        this.setState ({
            User:this.props.user,
            UserId: this.props.user.id,
            books:this.props.books
        })
        this.searchBooks()
      }
    searchBooks = () =>{
        let tempBookList=this.props.books
        let tempID = this.props.user.id
        let tempSearchResults = []
        tempBookList.map(function (books){
            if(books.id == tempID){
                tempSearchResults.push(books);
                console.log(tempSearchResults);
            }
        }
       
        )
    console.log(tempSearchResults);
    this.setState({
        filteredBooks: tempSearchResults,
        newBooks: tempSearchResults,
      });
    console.log(this.state.filteredBooks)
    console.log(this.state.newBooks)
        
    }
    EditBook = () =>{
        console.log("edit a book")
    }


    render() {
        
        return (
            <>
                <div className="body-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
                    <div className="book-listing" fluid="lg">
                        <Row>
                            <Col sm={5}>
                            <div>
                                <p className="greeting">Hi {this.state.User.firstName}</p>
                                <p className="seller-message"> Welcome to your seller page!  You can view and edit the books you have for sale!</p>
                            </div>
                            </Col>
                            <Col> 
                                <React.Fragment>
                                        {this.props.books.filter(book => book.id = this.props.user.id).map(filteredBook => (
                                        <>
                                            <div className="row posted-books">
                                                <div className="col-6">
                                                    <h3>Title: {filteredBook.title}</h3>
                                                    <h3>Author: {filteredBook.author}</h3>
                                                </div>  
                                                <div className="col-6">
                                                    <h3>Price: {filteredBook.price}</h3> 
                                                    <div><button><Link to="/Seller/Edit" onClick={() => this.EditBook(filteredBook)}>Edit Book</Link></button></div>         
                                                    <br />
                                                    <br />
                                                </div>
                                            </div>
                                        </>
                                        ))}
                                </React.Fragment>
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter (BookListing);