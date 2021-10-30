import React, {useState, useEffect} from 'react'
import PlaceHolder01 from '../../Images/PlaceHolder01.jpg'
import MagicBook from '../../Images/BookCrystalBall.png'
import '../Styles/Components.css'


    const BookDetails = ( props ) => {

        const[bookId, setBookId] = useState(props.book.bookId);
        const[bookRating, setRating] = useState([]);
        const[bookReview, setReview] = useState([]);
        const[newReview, setNewReview] = useState("");
        const[newRating, setNewRating] = useState(null);
        const[allRelevant, setAllRelevant]=useState([]);
        const[reviewStatus, setReviewStatus]=useState(false);

        useEffect (() =>{
            filterReviews();
        }, [props])
    
        useEffect(() => {
            setBookId(props.book.bookId)
        }, [bookReview])
    
        const filterReviews = () =>{
            let allRelevantReviews = []
            let allRelevantRatings =[]
            let allRelevant=[]
            props.reviews.map(function (review){
                if(review.bookId == props.book.bookId){
                    let bookReview = review.review
                    let bookRating = review.rating
                    allRelevantReviews.push(bookReview)
                    allRelevantRatings.push(bookRating)
                    allRelevant.push(review)
                }
            setRating(allRelevantRatings)
            setReview(allRelevantReviews)
            setAllRelevant(allRelevant)
            })
            if(allRelevant.length > 0){
                setReviewStatus(true)
            }
        }

         //#region Form
    const onChange = (event) =>{
        setNewReview(event.target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        props.setNewReview(newReview, newRating, bookId)
    }

    const onDropdownChange=(event) =>{
        let tempRating = (event.target.value)
        let newRating = parseInt(tempRating);
        setNewRating(newRating)
    }
    //#endregion


    console.log(props.book)
    if (!props.book) {
        return <div>no book</div>;
        }
    return ( 
        <>
            <div className="magic-book" style={{ backgroundImage: `url(${MagicBook})`}}>
                <div className= "main-body-details">
                    <div className = "row opac">
                        <div className="col-1"></div>
                        <div className = "col-3">
                            <img src={PlaceHolder01}></img>
                        </div>
                        <div className = "col-7 book-details-box">
                            <div className="row">
                                <p className ="book-title">{props.book.title}</p>
                                <p className ="book-author"> written by {props.book.author}</p>
                                <p className ="book-description">{props.book.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "row review-row">
                    <div className="col-1">

                    </div>
                    <div className="col-4 review-box">
                    {reviewStatus ? null : <p> Be the first to leave a review!</p>}
                        {allRelevant.map(function(review){
                            return(
                                <p>{review.rating}/5 -- "{review.review}"</p>
                            )
                        })}
                        <p>{newRating} {newReview}</p>
                    </div>
                    <div className="col-1">
                        
                    </div>
                    <div className="col-5">
                        <form onSubmit={onSubmit}>
                            <div className="row rating-row">
                                <svg xmlns="http://www.w3.org/2000/svg"  class="bi bi-star-half" viewBox="0 0 16 16">
                                    <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
                                </svg>
                                <select onChange={onDropdownChange} name="newRating">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="row">
                                <input type="text" name="newReview" onChange={onChange}placeholder="Your review here..."></input>
                            </div>
                            <div className="row">
                                <button type="submit">Submit Review</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-1">

                    </div>
                </div>
            </div>
        </>
     );
}

export default BookDetails;