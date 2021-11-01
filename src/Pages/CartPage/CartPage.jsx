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
            cartLoaded: false,
            filteredBooks:[],
            cartTotal: 0
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
                shoppingCart: response.data,
                cartLoaded: true,
                },()=>{
                    this.filterBooks();
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
            currentUserId : this.props.currentUserID,
            books: this.props.books
        })
        this.getShoppingCart();

    }

    componentDidUpdate(){
        if(this.props.currentUserID != this.state.currentUserID){
            this.setState({
                currentUserID: this.props.currentUserID
            }, ()=>{
                this.getShoppingCart()
            })
        }  
    }

    updateQuantity = async (userId, bookId, count) =>{
        let newQuantity = {
            "quantity" : count
        }
        await axios.put(`https://localhost:44394/api/shoppingCart/update/${userId}/${bookId}`, newQuantity);
    }

    // getAllBookDetails =() =>{
    //     let tempBooks = []
    //     this.state.shoppingCart.map((book)=>{
    //         let tempBook = {}
    //         tempBook = this.getBook(book.bookId)
    //         tempBooks.push(tempBook)
    //     });
    //     this.setState({
    //         books: tempBooks
    //     })
    // }

    filterBooks = () => {
        let tempBooks = this.props.books;
        let tempCart = this.state.shoppingCart;
        let filteredBooks = [];
        if(this.state.shoppingCart ==[]){
            return
        }
        else{
            tempBooks.map(function(cartBook){
                for(let i=0; i < tempCart.length; i++){
                    if(cartBook.bookId == tempBooks[i].bookId){
                        filteredBooks.push(cartBook)
                    }
                }
            })
            this.setState({
                filteredBooks: filteredBooks
            }, ()=>{
                this.totalCart()
            })
        }
    }

    totalCart=()=>{
        let cartBooks = this.state.filteredBooks
        let cartTotal = 0
        for(let i = 0; i<cartBooks.length; i++){
            let price = cartBooks[i].price
            cartTotal += price;
        }
        this.setState({
            cartTotal : cartTotal
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
                            {this.state.filteredBooks.map((book) => {
                                return (
                                    <CartItem userId={this.state.currentUserID} book={book} deleteBook={this.removeBookFromShoppingCart} updateQuantity={this.updateQuantity} />
                                );
                            })}
                        </div>
                        <h1> Your Total: {this.state.cartTotal} </h1><button type="button">Checkout</button>
                    </div>
                </div>
            </>
        );
    }
}

export default CartPage;