import React, {useState, useEffect} from 'react'
import PlaceHolder01 from '../../Images/PlaceHolder01.jpg'
import MagicBook from '../../Images/BookCrystalBall.png'
import '../Styles/Components.css'

const BookDetails = (props)=> {

    const[bookId, setbookId] = useState("")
    // const[bookRating, setBookRating] = useState(props.review.rating)
    // const[bookReview, setReview] = useState(props.review.review)

    
    return ( 
        <>
        <div className= "main-body-details">
            <div className="magic-book" style={{ backgroundImage: `url(${MagicBook})`}}>
                <div className = "row opac">
                    <div className="col-1"></div>
                    <div className = "col-3">
                        <img src={PlaceHolder01}></img>
                    </div>
                    <div className = "col-7 book-details-box">
                        <div className="row">
                            <p className ="book-title">{props.singleBook.title}</p>
                            <p className ="book-author"> written by {props.singleBook.author}</p>
                            <p className ="book-description">{props.singleBook.description}</p>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
        </>
     );
}

export default BookDetails;