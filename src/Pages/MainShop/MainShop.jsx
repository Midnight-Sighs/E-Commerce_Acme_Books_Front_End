import React, {Component} from 'react'
import MagicBook from '../../Images/BookCrystalBall.png';
import '../Styles/Pages.css'
import MainBody from '../../Components/MainShop/MainBody'
import axios from 'axios';

class MainShop extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }

    

    render() { 
        return ( 
            <MainBody books={this.props.books} setBookId={this.props.setBookId} bookId={this.props.singleBookId} loggedIn={this.props.loggedIn} />
         );
    }
}
 
export default MainShop;