import React, { Component } from 'react';
import CartItem from '../../Components/CartItem/CartItem';
import MagicBook from '../../Images/BookCrystalBall.png';
import '../Styles/Pages.css';
import axios from 'axios';

class CartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    updateQuantity = async (cartId, bookId, count) =>{
        const response = await axios.post('http://localhost:62321/api/shoppingCart/' + cartId + '/' + bookId + '/' + count + '/');

    }

    render() {
        return (
            <>
                <div className="bod-bg-img" style={{ backgroundImage: `url(${MagicBook})` }}>
                    <div className="row login-page-row">
                        <div className="col-5 mx-5">
                            <br />INSERT IMAGE HERE
                            <br />INSERT IMAGE HERE
                            <br />INSERT IMAGE HERE
                            <br />INSERT IMAGE HERE
                            <br />INSERT IMAGE HERE
                            <br />INSERT IMAGE HERE
                        </div>
                        <div className="col-6">
                            <br />
                            {this.props.shoppingCart.map((book) => {
                                return (
                                    <CartItem book={book} updateQuantity={this.updateQuantity} key={book.bookId} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CartPage;