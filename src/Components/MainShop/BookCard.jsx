import React from 'react'
import '../Styles/Components.css'
import PlaceholderCover from '../../Images/PlaceholderCover.png'

const BookCard=(props)=> {
    return ( 
        <>
            <div className="container book-card">
                <div className="row">
                    <div className="col-2 bc-part">
                        <img className="bc-img" src={PlaceholderCover}></img>
                    </div>
                    <div className="col-2 bc-part">
                        <p>
                        Title{/*props.book.title*/}
                        <br />Author{/*props.book.author*/}
                        <br />Price {/*props.book.price*/}
                        </p>
                    </div>
                    <div className="col-8"></div>
                </div>
            </div>
        </>
     );
}

export default BookCard;