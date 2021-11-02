import React, {useState, useEffect} from 'react'
import BookCard from './BookCard'
import '../Styles/Components.css'
import MagicBook from '../../Images/BookCrystalBall.png'
import { withRouter } from 'react-router-dom';
import {useParams} from "react-router-dom";
import axios from "axios";

const initialFieldValues = {
    searchTerm: "",
}


const MainBody = (props)=> {
    const [values, setValues] = useState(initialFieldValues)
    const [bookList, setBookList] = useState([])
    const [searchTerms, setSearchTerms]= useState([])

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
        searchBooks()
    }
    useEffect(()=>{
        refreshBookList()
        searchBooks()
    }, [props])
    const baseURL = 'https://localhost:44394/api/book'
    //book/delete/{id:int}

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

    const searchBooks = () =>{
        let tempSearchResults = []
        let tempBookList=bookList
        let tempTerm = values.searchTerm
        tempBookList.map(function(book){
            if(book.title.includes(tempTerm)||book.author.includes(tempTerm)||book.isbn.includes(tempTerm)||book.genre.includes(tempTerm)||book.releaseYear.includes(tempTerm)){
                tempSearchResults.push(book);
            }
        })
        
        setBookList(tempSearchResults)
    };

    console.log(props.props)
    if (props.props === undefined) {
       // this.props.refreshBooks();
        return (
        <div className="body-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
            <h1>OOPS!! There are no books to see here!</h1>
        </div>);
      }


    return ( 
        <><form autoComplete="off" noValidate onSubmit={searchBooks}>
        <label className="search-label" htmlFor="header-search"></label>
        <input
            className = "search-field"
            type="text"
            id="header-search"
            placeholder="Search books..."
            name="searchTerm"
            value={values.searchTerm}
            onChange={handleInputChange}
        />
        <button className="search-btn" type="submit">Search</button>
    </form>

    <hr></hr>
            <div className="body-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
                <div className="row main-body">

                    {bookList.map((book) => {
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