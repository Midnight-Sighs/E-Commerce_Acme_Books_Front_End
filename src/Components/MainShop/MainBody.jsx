import React, {useState, useEffect} from 'react'
import BookCard from './BookCard'
import '../Styles/Components.css'
import MagicBook from '../../Images/BookCrystalBall.png'
import { withRouter } from 'react-router-dom';
import {useParams} from "react-router-dom";
import axios from "axios";

//comment

const MainBody = (props)=> {
    const [bookList, setBookList] = useState([props.props])
    const [searchTerms, setSearchTerms]= useState([])
    const [searchResults, setSearchResults] = React.useState([]);

    const handleChange = event => {
        setSearchTerms(event.target.value);
      };

      useEffect(() => {
            let tempSearchResults = []
            let tempBookList=props.props
            let tempTerm = searchTerms
            let tempSearchReults = tempBookList.map(function(book){
                if(book.title.toLowerCase().includes(searchTerms)||book.author.toLowerCase().includes(searchTerms)||book.isbn.includes(searchTerms)||book.genre.toLowerCase().includes(searchTerms)||book.releaseYear.includes(searchTerms)){
                    tempSearchResults.push(book);
                }
            })
        setSearchResults(tempSearchResults);
      }, [searchTerms]);



    const baseURL = 'https://localhost:44394/api/book'
    const bookAPI = () => {
        return {
            fetchAll: () => axios.get(baseURL),
        }
    }
    function refreshBookList() {
        bookAPI().fetchAll()
            .then(res => {
                setBookList(res.data)
            })
            .catch(err => console.log(err))
    }
    if (props.props === undefined) {
        return (
        <div className="body-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
            <h1>OOPS!! There are no books to see here!</h1>
        </div>);
      }


    return ( 
        <>
        <div className="body-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
            <form className="search-bar-form" autoComplete="off" noValidate>
                <label className="search-label" htmlFor="header-search"></label>
                <input
                    className = "search-field"
                    type="text"
                    id="header-search"
                    placeholder="Search books..."
                    name="searchTerm"
                    value={searchTerms}
                    onChange={handleChange}
                />
                {/* <button className="search-btn" type="submit">Search</button> */}
            </form>
                
                <div className="row main-body">

                    {searchResults.map((book) => {
                            return(
                                <>
                                    <div key={book.bookId} className= "col-lg-3 col-md-3 col-sm-4 col-xsm-10 col-for-card">
                                        <BookCard book={book} loggedIn={props.loggedIn} addBookToShoppingCart={props.addBookToShoppingCart}/>
                                    </div>
                                    <div className="col-1"></div>
                                </>
                            )
                        })}
                </div>
            </div>
        </> 
    );
}

export default withRouter (MainBody);