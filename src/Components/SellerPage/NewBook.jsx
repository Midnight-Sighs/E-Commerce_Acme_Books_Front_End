import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { Container, Form, Row, Col } from "react-bootstrap";

class NewBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: "",
            Author: "",
            Description: "",
            Genre: "",
            ReleaseYear: "",
            Genre: "",
            ISBN: "",
            Price: "",
            UserId: props.props,
            errors: {
                Title: "",
                Author: "",
                Description: "",
                Genre: "",
                ReleaseYear: "",
                Genre: "",
                ISBN: "",
                Price: "",
                UserId: "",
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        console.log(this.props)
      }
    async createListing() {
        var newbook = {
            Title: this.state.Title,
            Author: this.state.Author,
            Description: this.state.Description,
            Genre: this.state.Genre,
            ReleaseYear: this.state.ReleaseYear,
            ISBN: this.state.ISBN,
            Price: this.state.Price,
            Id: this.props.user
        }
        console.log(newbook)
        try {
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'                    
                }
              };
            console.log(newbook);
            await axios.post("https://localhost:44394/api/book", newbook, axiosConfig)
            alert(`${this.state.title} has been added`)
        } catch (err) {
            console.log(err);
        }
    }

    handleChange = (event) => {
        let errors = this.state.errors;

        switch (event.target.name) {
            case 'title':
                errors.title = event.target.value.length < 1 ? 'Dont forget your title' : null;
                break;
            case 'author':
                errors.author = event.target.value.length < 1 ? 'Who wrote the book?' : null;
                break;
            case 'description':
                errors.description = event.target.value.length < 1 ? 'What is this about?' : null;
                break;
            case 'genre':
                errors.genre = event.target.value.length < 0 ? 'Need a genre' : null;
                break;
            case 'releaseYear':
                errors.releaseYear = event.target.value.length < 0 ? 'What year was this book published?' : null;
                break;
            case 'isbn':
                errors.isbn = event.target.value.length < 0 ? 'Who even knew ISBN was a thing' : null;
                break;
            case 'price':
                errors.price = event.target.value.length < 0 ? 'Price it fairly, its not that rare.' : null;
                break;
        }
        this.setState({
            [event.target.name]: event.target.value,
            error: errors
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.createListing();
    }

    render() {
        return (
            <>
            <Container fluid="md"><Col sm={6}>
                <h1>
                Sell a book! Get Monies
                </h1>
                <Form className="newBook" onSubmit={(event) => this.handleSubmit(event)}>
                    <Form.Group controlId="name">
                        <Form.Label className="reg-label">Title</Form.Label>
                        <Form.Control type="text" placeholder="Title"
                                      name="Title" onChange={this.handleChange} value={this.state.Title}/>
                    </Form.Group>
                    {this.state.errors.title ? <p style={{color: 'red'}}>{this.state.errors.title}</p> : ''}

                    <Form.Group controlId="Author">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="Author" name="Author"
                                      onChange={this.handleChange} value={this.state.Author}/>
                    </Form.Group>
                    {this.state.errors.author ? <p style={{color: 'red'}}>{this.state.errors.author}</p> : ''}

                    <Form.Group controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Description goes here" name="Description"
                                      onChange={this.handleChange} value={this.state.Description}/>
                    </Form.Group>
                    {this.state.errors.description ? <p style={{color: 'red'}}>{this.state.errors.description}</p> : ''}

                    <Form.Group controlId="Genre">
                        <Form.Label>Genre</Form.Label>
                        <Form.Control type="text" placeholder="Genre" name="Genre"
                                      onChange={this.handleChange} value={this.state.Genre}/>
                    </Form.Group>
                    {this.state.errors.genre ? <p style={{color: 'red'}}>{this.state.errors.genre}</p> : ''}

                    <Form.Group controlId="ReleaseYear">
                        <Form.Label>Release Year?</Form.Label>
                        <Form.Control type="text" placeholder="What year was this released?" name="ReleaseYear"
                                      onChange={this.handleChange} value={this.state.ReleaseYear}/>
                    </Form.Group>
                    {this.state.errors.releaseYear ? <p style={{color: 'red'}}>{this.state.errors.releaseYear}</p> : ''}

                    <Form.Group controlId="ISBN">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control type="text" placeholder="10 or 13 digit ISB?" name="ISBN"
                                      onChange={this.handleChange} value={this.state.ISBN}/>
                    </Form.Group>
                    {this.state.errors.isbn ? <p style={{color: 'red'}}>{this.state.errors.isbn}</p> : ''}

                    <Form.Group controlId="Price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Price of this?" name="Price"
                                      onChange={this.handleChange} value={this.state.Price}/>
                    </Form.Group>
                    {this.state.errors.price ? <p style={{color: 'red'}}>{this.state.errors.price}</p> : ''}
                    <br/>
                    <Button variant="primary" type="submit">Create Listing</Button>
                </Form>
            </Col>
            </Container></>
        )
    }
}

export default withRouter (NewBook);