import React, {useState, useEffect} from 'react'
import BookCard from './BookCard'
import '../Styles/Components.css'
import MagicBook from '../../Images/BookCrystalBall.png'


const MainBody = (props)=> {

    const[books, setBooks] =useState([]);

    useEffect(()=>{
        setBooks(props.books)
    }, [props]);

    console.log(props.books)
    if (props.books == []) {
        return (<div className="body-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>

            <h1>OOPS!! There are no books to see here!</h1>

        </div>);
      }
    return ( 
        <>
            <div className="body-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
                <div className="row main-body-row">

                    {books.map((book) => {
                            return(
                                <div className= "col-3">
                                    <BookCard bookId={props.bookId} setBookId={props.setBookId} book={book} loggedIn={props.loggedIn} />
                                </div>
                            )
                        })}
                </div>
            </div>
        </> 
    );
}

export default MainBody;