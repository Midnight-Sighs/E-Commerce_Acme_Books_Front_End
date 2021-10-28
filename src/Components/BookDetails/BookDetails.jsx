import React, {useState, useEffect} from 'react'
import PlaceHolder01 from '../../Images/PlaceHolder01.jpg'
import MagicBook from '../../Images/BookCrystalBall.png'
import '../Styles/Components.css'

const BookDetails = (props)=> {

    const[bookId, setbookId] = useState("")
    const[bookRating, setRating] = useState([])
    const[bookReview, setReview] = useState([])

    useEffect (() =>{
        filterReviews()
    }, [props])

    useEffect(() => {

    }, [bookReview])

    const filterReviews = () =>{
        let allRelevantReviews = []
        let allRelevantRatings =[]
        props.reviews.map(function (review){
            if(review.bookId == props.singleBook.bookId){
                let bookReview = review.review
                let bookRating = review.rating
                allRelevantReviews.push(bookReview)
                allRelevantRatings.push(bookRating)
            }
        setRating(allRelevantRatings)
        setReview(allRelevantReviews)
        })
    }

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
                        <div className = "row">
                            <div className="col-12">
                                {bookRating.map(function(rating){
                                    return(
                                    <div className="col-6">
                                        <p>{rating}/5</p>
                                    </div>
                                    )
                                })}
                                {bookReview.map(function(review){
                                   return(
                                    <div className="col-6">
                                        <p>{review}</p>
                                    </div>
                                   )
                                })}
                        </div>
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