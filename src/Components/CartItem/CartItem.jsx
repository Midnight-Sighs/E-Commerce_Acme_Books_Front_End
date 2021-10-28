import React, { useState } from 'react';

const CartItem = ({ book, updateQuantity }) => {

    const [count, setCount] = useState(book.quantity);

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
                    <button onClick={() => setCount(count - 1)} type="button" class="btn btn-outline-primary">-</button>
                    <button type="button" class="btn btn-outline-primary">{book.quantity}</button>
                    <button onClick={() => setCount(count + 1)} type="button" class="btn btn-outline-primary">+</button>
                    <button onClick={ () => updateQuantity(book.cartId, book.bookId, this.state.count)} type="button" class="btn btn-outline-primary">update</button>
                </div>
            </div>
        </div>
    )
};

export default CartItem;