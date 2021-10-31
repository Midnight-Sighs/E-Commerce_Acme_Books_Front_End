import React, { Component } from 'react';
import CartItem from '../../Components/CartItem/CartItem';
import MagicBook from '../../Images/BookCrystalBall.png';
import '../Styles/Pages.css';
import axios from 'axios';
import BlueBookPile from '../../Images/BlueBookPile.jpg'

class CartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books:[]
        }
    }

    getBook = async (bookId) =>{
        const response = await axios.get('https://localhost:44394/api/' + bookId);
        let tempBook = response.data
        return tempBook
    }

    componentDidMount=()=>{
        this.props.getCart()
        this.getAllBookDetails()
    }

    updateQuantity = async (cartId, bookId, count) =>{
        const response = await axios.post('http://localhost:62321/api/shoppingCart/' + cartId + '/' + bookId + '/' + count + '/');
    }

    getAllBookDetails =() =>{
        let tempBooks = []
        this.props.shoppingCart.map((book)=>{
            let tempBook = {}
            tempBook = this.getBook(book.bookId)
            tempBooks.push(tempBook)
        });
        this.setState({
            books: tempBooks
        })
    }

    render() {
        return (
            <>
                <div className="bod-bg-img" style={{ backgroundImage: `url(${MagicBook})` }}>
                    <div className="row cart-page-row">
                        <div className=" book-pile col-5 mx-5">
                            <img src={BlueBookPile}></img>
                        </div>
                        <div className="mt-4 col-6">
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