import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { Container, Form, Row, Col } from "react-bootstrap";

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
        console.log(this.props.books)
        this.setState ({
            User:this.props.user,
            UserId: this.props.user.id,
            books:this.props.books
        })
        console.log(this.state.books)
        this.searchBooks()
      }
    searchBooks = () =>{
        let tempBookList=this.props.books
        let tempID = this.props.user.id
        let tempSearchResults = []
        tempBookList.map(function (books){
            if(books.id == tempID){
                this.filtered.push(books);
                console.log(tempSearchResults);
            }
        }
       
        )
    console.log(tempSearchResults);
    this.setState({
        filteredBooks: tempSearchResults,
        newBooks: tempSearchResults,
      });
        

    }
    searchBooks = () =>{
        console.log("edit a book")
    }


    render() {
        
        return (
            <>
            <Container fluid="md"><Col sm={6}></Col>
                <p>Hi {this.state.UserId}</p><hr></hr>
                <Row>
                <Col> <React.Fragment>{this.props.books.map((book) => {
                            return(
                                <li>Book ID: {book.bookid}, Title: {book.title}  Price: {book.price} <Button onclick={this.Edit}> Edit Book </Button></li>
                            )
                        })}</React.Fragment></Col>
              </Row>
            </Container></>
        )
    }
}

export default withRouter (BookListing);