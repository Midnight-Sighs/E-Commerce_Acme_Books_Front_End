import React from 'react'
import BookCard from './BookCard'
import '../Styles/Components.css'
import MagicBook from '../../Images/BookCrystalBall.png'


const MainBody = (props)=> {

    console.log(props.props)
    if (props.props === undefined) {
       // this.props.refreshBooks();
        return (
        <div className="body-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
            <h1>OOPS!! There are no books to see here!</h1>
        </div>);
      }
    return ( 
        <>
            <div className="body-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
                <div className="row main-body-row">

                    {props.props.map((book) => {
                            return(
                                <div className= "col-3">
                                <BookCard book={book} loggedIn={props.loggedIn} />
                            </div>
                            )
                        })}
                </div>
            </div>
        </> 
    );
}

export default MainBody;