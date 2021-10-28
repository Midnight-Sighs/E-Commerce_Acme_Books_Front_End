import React, { Component } from 'react';
import axios from 'axios';
import BookDetails from '../../Components/BookDetails/BookDetails'

console.log(window.location.pathname)
var pathArray = window.location.pathname.split('/');
var secondLevelLocation = pathArray[2];
console.log(secondLevelLocation)

class BookDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book:[]
          }
    }
    getBook = async () =>{
        console.log('Getting single book')
        const response = await axios.get('https://localhost:44394/api/book/' + secondLevelLocation);
        this.setState({
          book: response.data
        })
        console.log(this.state.book)
      }
    componentDidMount() {
            this.getBook();
            //this.getShoppingCart();
            // this.getCurrentUser();
          }
    render() { 
        return ( 
            <>
            <p>We are at {secondLevelLocation}</p>
            <BookDetails props={this.state.book}/>
            </>
         );
    }
}
 
export default BookDetailPage;