import React, { Component } from 'react';
import MagicBook from '../../Images/BookCrystalBall.png';

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
                <div className="bod-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
             
                </div>
            </>
         );
    }
}
 
export default Anon;