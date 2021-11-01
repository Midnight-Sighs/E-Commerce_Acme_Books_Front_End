import React from 'react'
import BookCard from './BookCard'
import '../Styles/Components.css'
import MagicBook from '../../Images/BookCrystalBall.png'
import { withRouter } from 'react-router-dom';


const MainBody = (props)=> {

    console.log(props.props)
    if (props.props === undefined) {
       // this.props.refreshBooks();
        return (
        <div className="body-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
            <h1>OOPS!! There are no books to see here!</h1>
        </div>);
      }
    return ( 
        <>
            <div className="body-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
                <div className="row main-body">

                    {props.props.map((book) => {
                            return(
                                <>
                                    <div key={book.bookId} className= "col-lg-3 col-md-3 col-sm-4 col-xsm-10 col-for-card">
                                        <BookCard book={book} loggedIn={props.loggedIn} addBookToShoppingCart={props.addBookToShoppingCart}/>
                                    </div>
                                    <div className="col-1"></div>
                                </>
                            )
                        })}
                </div>
            </div>
        </> 
    );
}

export default withRouter (MainBody);