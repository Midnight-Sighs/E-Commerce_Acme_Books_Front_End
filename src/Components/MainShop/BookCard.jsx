import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import '../Styles/Components.css'
import PlaceholderCover from '../../Images/PlaceHolder01.jpg'
import BookDetails from '../../Components/BookDetails/BookDetails'

const BookCard=(props)=> {

    const[book, setBook]=useState(props.book)

    const onClick = () =>{
        props.setBookId(props.book.bookId)
        setBook(props.book)
    }

    return ( 
        <>
            <div className="container book-card">
                <div className="row bc-part">
                    <p>
                    {props.book.title}
                    <br />{props.book.author}
                    <br />{props.book.price}
                    <br />{props.loggedIn ? <button onClick={onClick} ><Link to="/details" render={() => <BookDetails book={book}/>}> View Book Details </Link></button> : "Please login to see Book details" }
                    </p>
                </div>
                <img src={PlaceholderCover}></img>  
            </div>
        </>
    );
}

export default BookCard;