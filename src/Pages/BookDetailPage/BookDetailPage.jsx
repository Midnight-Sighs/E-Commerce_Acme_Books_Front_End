import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Components/Header/Header'
import NavBar from '../../Components/NavBar'
import BookDetails from '../../Components/BookDetails/BookDetails'

class BookDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            
            <BookDetails />
            </>
         );
    }
}
 
export default BookDetailPage;