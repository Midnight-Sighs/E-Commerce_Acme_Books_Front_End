import React from 'react'
import BookCard from './BookCard'
import '../Styles/Components.css'
import MagicBook from '../../Images/BookCrystalBall.png'


const MainBody = (props)=> {

    console.log(props.props)
    if (!props.props) {
        return <div>no book atm</div>;
      }
    return ( 
        <>
            <div className="body-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
                <BookCard />
                <div className="row main-body-row">
                    <div className="col-12">

                    {props.props.map((book) => {
                            return(
                                <BookCard book={book} anon={props.anon} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </> 
    );
}

export default MainBody;