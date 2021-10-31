import React, { useState } from 'react';

const CartItem = ({ userId, book, updateQuantity, deleteBook }) => {

    const [count, setCount] = useState(book.quantity);

    const onClickQuantity = () =>{
        if(count == 0){
            deleteBook(book.bookId);
        }
        else{
            debugger
            updateQuantity(userId, book.bookId, count);
        }
    }

    return (
        <div className="cart-card">
            {/* <img src={"images/" + book.title} className="card-img-top"  alt={book.description}/> */}
            <div className="cart-card-body">
                <h6 className="cart-card-title"> {} </h6>
                <small className="cart-card-text">{book.title}</small>
            </div>
            <div className="cart-card-body">
                Individual Item Price: {book.price}
            </div>
            <div className="cart-card-footer">
                <div class="cart-btn-group" role="group" aria-label="Basic outlined example">
                    <button onClick={() => setCount(count - 1)} type="button" className="cart-btn">-</button>
                    <button type="button" className="cart-btn">{count}</button>
                    <button onClick={() => setCount(count + 1)} type="button" className="cart-btn">+</button>
                    <button onClick={onClickQuantity} type="button" className="cart-btn">update</button>
                </div>
            </div>
        </div>
    )
};

export default CartItem;