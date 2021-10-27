import React from 'react'
import '../Styles/Components.css'
import PlaceholderCover from '../../Images/PlaceHolder01.jpg'

const BookCard=(props)=> {
    return ( 
        <>
            <div className="container book-card">
                <div className="row">
                    <div className="col-3">
                        <div className="row bc-part">
                            <p>
                            Title{/*props.book.title*/}
                            <br />Author{/*props.book.author*/}
                            <br />Price {/*props.book.price*/}
                            <br />Details (Link to detail page))
                            </p>
                        </div>
                        <img src={PlaceholderCover}></img>
                    </div>
                    <div className="col-8"></div>
                </div>
            </div>
        </>
     );
}

export default BookCard;