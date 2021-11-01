import React, {useState} from 'react'
import '../Styles/Components.css'
import PlaceholderCover from '../../Images/PlaceHolder01.jpg'
import {BrowserRouter as Router, Link} from "react-router-dom";
import BookDetailPage from '../../Pages/BookDetailPage/BookDetailPage';

const BookCard=(props)=> {
    
    const[linkPath, setLinkPath]=useState(`/BookDetail/${props.book.bookId}` )
    
    console.log(props.book)
    if (!props.book) {
        return <div>no book</div>;
      }

    return ( 
        <>
            <div className="book-card">
                <div className="row book-card-row">
                    <div className="bc-details row">
                        <div className="col-6">
                            <p>{props.book.title}
                            <br />{props.book.author}
                            <br />{props.book.price}</p>
                        </div>
                        <div className="col-6">
                        <br />{props.loggedIn ? <button className="detail-btn" ><Link to={linkPath} render={() => <BookDetailPage {...props} bookId={props.book.bookId} />}> View Book Details </Link></button> : "Please login to see Book details" }
                        <br />{props.loggedIn ? <button className="detail-btn" onClick={() => props.addBookToShoppingCart(props.book.bookId)}> Add to Cart </button> : "Please login to add to cart" }
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default BookCard;