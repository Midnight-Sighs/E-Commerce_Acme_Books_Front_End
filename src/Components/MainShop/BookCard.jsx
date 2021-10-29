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
            <div className="container book-card">
                <div className="row bc-part">
                    <p>
                    {props.book.title}
                    <br />{props.book.author}
                    <br />{props.book.price}
                    <br />{props.loggedIn ? <button  ><Link to={linkPath} render={() => <BookDetailPage />}> View Book Details </Link></button> : "Please login to see Book details" }
                    </p>
                </div>
                <img src={PlaceholderCover}></img>  
            </div>
        </>
     );
}

export default BookCard;