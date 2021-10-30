import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { Container, Form, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom";

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
            <Container fluid="md"><Col sm={6}></Col>
                <p>Hi {this.state.UserId}</p><hr></hr>
                <Row>
                <Col> <React.Fragment>
                <div>
                                {this.props.books.filter(book => book.id = this.props.user.id).map(filteredBook => (
                                            <li>
                                                Title: {filteredBook.title} Author: {filteredBook.author}  Price: {filteredBook.price} <Link to="/Seller/Edit" onClick={() => this.EditBook(filteredBook)}>Edit Book</Link>
                                            </li>
                                            
                                ))}
                </div>
                        </React.Fragment></Col>
              </Row>
            </Container></>
        )
    }
}

export default withRouter (BookListing);