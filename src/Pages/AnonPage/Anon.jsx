import React, { Component } from 'react';
import MainBody from '../../Components/MainShop/MainBody'
//import axios from 'axios';
//import LoginPage from '../LoginPage/LoginPage'

class Anon extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            anon : true
         }
    }
    render() { 
        return ( 
            <>
            THis is the anon lpage
                {/* <MainBody anon={this.props.anon} /> */}
            </>
         );
    }
}
 
export default Anon;