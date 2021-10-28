import React, {useState, useEffect} from 'react'

import PlaceHolder01 from '../../Images/PlaceHolder01.jpg'
import MagicBook from '../../Images/BookCrystalBall.png'
import '../Styles/Components.css'

const BookDetails = (props)=> {

    //#region State/Hooks
    const[singleBook, setSingleBook]=useState({})
    const[bookId, setBookId] = useState(props.singleBook.bookId);
    const[bookRating, setRating] = useState([]);
    const[bookReview, setReview] = useState([]);
    const[newReview, setNewReview] = useState("");
    const[newRating, setNewRating] = useState(0);

    useEffect (() =>{
        filterReviews()
    }, [bookId])

    useEffect(() => {
        setSingleBook(props.singleBook)
        setBookId(singleBook.bookId)
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
    //#endregion

    //#region Form
    const onChange = (event) =>{
        setNewReview(event.target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        debugger
        props.setNewReview(newReview, newRating, bookId)
    }

    const onDropdownChange=(event) =>{
        let tempRating = (event.target.value)
        let newRating = parseInt(tempRating);
        setNewRating(newRating)
    }
    //#endregion

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
                            <p className ="book-title">{singleBook.title}</p>
                            <p className ="book-author"> written by {singleBook.author}</p>
                            <p className ="book-description">{singleBook.description}</p>
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
                    <div className="row">
                        <div className="col-12">
                            <form onSubmit={onSubmit}>
                                <select onChange={onDropdownChange} name="newRating">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <input type="text" name="newReview" onChange={onChange}placeholder="Your review here..."></input>
                                <button type="submit">Submit Review</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default BookDetails;