import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Components/Header/Header'
import NavBar from '../../Components/NavBar/NavBar'
import MainBody from '../../Components/MainShop/MainBody'
import BookDetails from '../../Components/BookDetails/BookDetails'

class Anon extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <>
            <Header />
            <NavBar currentPage={this.props.currentPage} />
            <BookDetails />
            </>
         );
    }
}
 
export default Anon;