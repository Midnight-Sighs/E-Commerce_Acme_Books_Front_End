import React from 'react';

const CartItem = ({ book, increaseQuantity, decreaseQuantity }) => {
    return (
        <div className="card">
            <img src={"images/" + book.title} className="card-img-top"  alt={book.description}/>
            <div className="card-body">
                <h6 className="card-title"> {} </h6>
                <small className="card-text">{book.title}</small>
            </div>
            <div className="card-body">
                Individual Item Price: {book.price}
            </div>
            <div className="card-footer">
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button onClick={ () => decreaseQuantity(book.cartId, book.bookId)} type="button" class="btn btn-outline-primary">-</button>
                    <button type="button" class="btn btn-outline-primary">{book.quantity}</button>
                    <button onClick={ () => increaseQuantity(book.cartId, book.bookId)} type="button" class="btn btn-outline-primary">+</button>
                </div>
            </div>
        </div>
    )
};

export default CartItem;