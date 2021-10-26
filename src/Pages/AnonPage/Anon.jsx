import React, { Component } from 'react';
import Header from '../../Components/Header/Header'
import NavBar from '../../Components/NavBar/NavBar'

class Anon extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <Header />
            <NavBar />
            </>
         );
    }
}
 
export default Anon;