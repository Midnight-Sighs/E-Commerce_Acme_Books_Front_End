import React, { Component } from 'react';
import '../Styles/Pages.css'
import MagicBook from '../../Images/BookCrystalBall.png';
import BookCover01 from '../../Images/BookCover01.jpg'
import BookCover02 from '../../Images/BookCover02.jpg'


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
                    <div className="row">
                        <div className="col-4">
                            <img className="cover-01" src={BookCover01}></img>
                        </div>
                            <div className="col-4">
                                <h1 className="anon-text">Welcome to Acme Book! Here we believe that no matter how old you are or get, you can find magic hidden within books.  Whether you're reading to learn or reading to escape reality, the magic is here waiting for you.  Register today to find a book for you!</h1>
                            </div>
                        <div className="col-4">
                            <img className="cover-02"src={BookCover02}></img>
                        </div>
                   </div>
                </div>
            </>
         );
    }
}
 
export default Anon;