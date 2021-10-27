import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Components/Header/Header'
import NavBar from '../../Components/NavBar/NavBar'

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
            </>
         );
    }
}
 
export default Anon;