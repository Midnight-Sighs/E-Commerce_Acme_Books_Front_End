import React, {Component} from 'react'
import MagicBook from '../../Images/BookCrystalBall.png';
import '../Styles/Pages.css'
import MainBody from '../../Components/MainShop/MainBody'

class MainShop extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <MainBody />
         );
    }
}
 
export default MainShop;