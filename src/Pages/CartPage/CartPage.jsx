import React, { Component } from 'react';
import CartItem from '../../Components/CartItem/CartItem';
import MagicBook from '../../Images/BookCrystalBall.png';
import '../Styles/Pages.css';

class CartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shoppingCart: [{ title: "Test",
            description: "Test descr",
            price: "18.50",
            quantity: "6",

        
            }],
            quantity: 0,

        }
    }

    increaseQuantity = () => {
        this.setState({
            quantity: (this.state.quantity + 1)
        })
    }

    decreaseQuantity = () => {
        this.setState({
            quantity: (this.state.quantity - 1)
        })
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
                            {this.state.shoppingCart.map((book) => {
                                return (
                                    <CartItem book={book} increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity} key={book.bookId} />
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