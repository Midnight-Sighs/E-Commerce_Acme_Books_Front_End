import React from 'react'
import '../Styles/Components.css'
import PlaceholderCover from '../../Images/PlaceholderCover.png'

const BookCard=(props)=> {
    return ( 
        <>
            <div>
                <div className="row">
                    <div className="book-card">
                        <img className="col-2 bc-img" src={PlaceholderCover}></img>
                    </div>
                    <div className="col-2">
                        Title{/*props.book.title*/}
                        <br />Author{/*props.book.author*/}
                        <br />Price {/*props.book.price*/}
                    </div>
                    <div className="col-8"></div>
                </div>
            </div>
        </>
     );
}

export default BookCard;