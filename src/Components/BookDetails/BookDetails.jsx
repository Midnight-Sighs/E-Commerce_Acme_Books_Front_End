import React from 'react'
import PlaceHolder01 from '../../Images/PlaceHolder01.jpg'
import MagicBook from '../../Images/BookCrystalBall.png'
import '../Styles/Components.css'


    const BookDetails = ( props ) => {
        console.log(props.props)
        if (!props.props) {
            return <div>no book</div>;
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
                            <p className ="book-title">{props.props.title}</p>
                            <p className ="book-author"> written by {props.props.author}</p>
                            <p className ="book-description">{props.props.description}</p>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div> 
                            <div class="book"> 
                                <div class="cover-back"> 
                                    <h1> props.book.rating</h1>
                                </div> 
                                <div class="page">
                                    <h3>props.book.review </h3>
                                </div> 
                                <div class="cover-front">
                                    <h1>Add Review</h1>
                                </div> 
                            </div>
                        </div>
                    </div> */}
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
        </>
     );
}

export default BookDetails;