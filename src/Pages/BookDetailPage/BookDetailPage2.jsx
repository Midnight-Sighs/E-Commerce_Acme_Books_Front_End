import React, {useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom';
import {useParams} from "react-router-dom";
import BookDetails from '../../Components/BookDetails/BookDetails'

import MagicBook from '../../Images/BookCrystalBall.png'
import '../Styles/Pages.css'



const BookDetailPage = (props) =>{
    console.log("************", props.userId)
    const [book, setBook] = useState([props.books[0]])


    useEffect(()=>{
        let loggedIn = props.loggedIn
        
    }, [props])

    console.log(book)
    return ( 
        <> 
            <div className="bod-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
            <BookDetails book={book} userId={props.userId}/>
            </div>
        </>
     );
}

export default withRouter (BookDetailPage);
