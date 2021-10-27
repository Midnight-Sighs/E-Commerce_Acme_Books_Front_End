import React from 'react'
import BookCard from './BookCard'
import '../Styles/Components.css'
import MagicBook from '../../Images/BookCrystalBall.jpg'

const MainBody = (props)=> {
    return ( 
        <>
            <div className = "row">
                <img className = "magic-book" src={MagicBook}></img>
            </div>
        </> 
    );
}

export default MainBody;