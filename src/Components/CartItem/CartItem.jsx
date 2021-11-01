import React, { useState } from 'react';

const CartItem = ({ userId, book, updateQuantity, deleteBook }) => {

    const [count, setCount] = useState(book.quantity);

    const onClickQuantity = () =>{
        if(count == 0){
            deleteBook(book.bookId);
        }
        else{
            updateQuantity(userId, book.bookId, count);
        }
    }

    return (
        <div className="cart-card">
            <div className="cart-card-footer">
                <div class="cart-btn-group" role="group" aria-label="Basic outlined example">
                    <button onClick={() => setCount(count - 1)} type="button" className="cart-btn">-</button>
                    <button type="button" className="cart-btn">{count}</button>
                    <button onClick={() => setCount(count + 1)} type="button" className="cart-btn">+</button>
                    <button onClick={onClickQuantity} type="button" className="cart-btn">Update</button>
                </div>
            </div>
        </div>
    )
};

export default CartItem;