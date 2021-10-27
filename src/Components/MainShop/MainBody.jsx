import React from 'react'
import BookCard from './BookCard'
import '../Styles/Components.css'
import MagicBook from '../../Images/BookCrystalBall.png'


const MainBody = (props)=> {
    return ( 
        <>
            <div className="body-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
                <BookCard />
                <div className="row main-body-row">
                    {/* <div className="col-12">
                        {props.books.map(function(book){
                            return(
                                <BookCard book={book} />
                            )
                        })}
                    </div> */}
                </div>
            </div>
        </> 
    );
}

export default MainBody;