import React, { Component } from 'react';
import CartItem from '../../Components/CartItem/CartItem';
import MagicBook from '../../Images/BookCrystalBall.png';
import '../Styles/Pages.css';
import axios from 'axios';
import BlueBookPile from '../../Images/BlueBookPile.jpg'

class CartPage extends Component {
    
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            books:[],
            shoppingCart: [],
            currentUserID: '',
        }
    }
    
    getBook = async (bookId) =>{
        const response = await axios.get('https://localhost:44394/api/book/' + bookId);
        let tempBook = response.data
        return tempBook
    }

    getShoppingCart = async () =>{
        const userid = this.state.currentUserID
        if(userid == ""){
            return;
        }
        else{
            const response = await axios.get(`https://localhost:44394/api/shoppingCart/${userid}`);
            this.setState({
                shoppingCart: response.data
                });
        }
    }

    removeBookFromShoppingCart = async (bookid) =>{
        const userid = this.state.currentUserID
        await axios.delete(`https://localhost:44394/api/shoppingCart/${userid}/delete/${bookid}`);
        this.getShoppingCart();
      }

    componentDidMount=()=>{
        this.setState({
            currentUserId : this.props.currentUserID
        })
        this.getShoppingCart();
    }

    componentDidUpdate(){
        if(this.props.currentUserID != this.state.currentUserID){
            this.setState({
                currentUserID: this.props.currentUserID
            })
        }
        this.getShoppingCart();
        
    }

    updateQuantity = async (userId, bookId, count) =>{
        let newQuantity = {
            "quantity" : count
        }
        await axios.put(`https://localhost:44394/api/shoppingCart/update/${userId}/${bookId}`, newQuantity);
    }

    getAllBookDetails =() =>{
        let tempBooks = []
        this.state.shoppingCart.map((book)=>{
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
                            {this.state.shoppingCart.map((book) => {
                                return (
                                    <CartItem userId={this.state.currentUserID} book={book} deleteBook={this.removeBookFromShoppingCart} updateQuantity={this.updateQuantity} />
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