import React, { Component } from 'react';
import CartItem from '../../Components/CartItem/CartItem';
import MagicBook from '../../Images/BookCrystalBall.png';
import '../Styles/Pages.css';
import axios from 'axios';
import BlueBookPile from '../../Images/BlueBookPile.jpg'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

class CartPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            books:[],
            shoppingCart: [],
            currentUserID: '',
            filteredBooks:[],
            cartTotal: 0
        }
    }
    createOrder(data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: this.state.cartTotal,
              },
            },
          ],
        });
    }
    onApprove(data, actions) {
        this.onClickCheckout()
        this.setState({
            books: [],
            cartTotal: 0,
            showSuccess: true,
        })
        return actions.order.capture();
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
                },()=>{
                    this.filterBooks();
                });
        }
    }

    removeBookFromShoppingCart = async (bookid) =>{
        const userid = this.state.currentUserID
        await axios.delete(`https://localhost:44394/api/shoppingCart/${userid}/delete/${bookid}`);
        this.getShoppingCart();
        this.filterBooks();
      }

    componentDidMount=()=>{
        this.setState({
            currentUserId : this.props.currentUserID,
            books: this.props.books
        })
        this.getShoppingCart();
        this.filterBooks();

    }

    componentDidUpdate(){
        if(this.props.currentUserID != this.state.currentUserID){
            this.setState({
                currentUserID: this.props.currentUserID
            }, ()=>{
                this.getShoppingCart()
                this.filterBooks();
            })
        }  
    }

    updateQuantity = async (userId, bookId, count) =>{
        let newQuantity = {
            "quantity" : count
        }
        await axios.put(`https://localhost:44394/api/shoppingCart/update/${userId}/${bookId}`, newQuantity);
        this.setState({

        }, ()=>{
            this.filterBooks();
        })
    }


    filterBooks = () => {
        let tempBooks = this.props.books;
        let tempCart = this.state.shoppingCart;
        let filteredBooks = [];
        if(this.state.shoppingCart ==[]){
            return
        }
        else{
            tempCart.map(function(cartBook){
                for(let i=0; i < tempBooks.length; i++){
                    if(cartBook.bookId == tempBooks[i].bookId){
                        filteredBooks.push(tempBooks[i])
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

    onClickCheckout =()=>{
        let boughtBooks = this.state.filteredBooks
        for(let i =0; i<boughtBooks.length; i++){
            let bookId = boughtBooks[i].bookId
            this.props.deleteBook(bookId);
        }
        alert("Thank you for your purchase!  We'll charge the card we have on file and ship them right out!  Enjoy your books!")
        this.setState({
            filteredBooks : [],
            shoppingCart: [],
        })
    }
    

    render() {
        return (
            <>
                <div className="bod-bg-img" style={{ backgroundImage: `url(${MagicBook})` }}>
                    <div className="row cart-page-row">
                        <div className=" book-pile col-4 mx-5">
                            <img src={BlueBookPile}></img>
                        </div>
                        <div className="mt-4 col-3">
                            <br />
                            {this.state.filteredBooks.map((book)=>{
                                return(
                                    <div className="cart-details" key={book.cartid}>
                                        <h1>{book.title}</h1>
                                        <h1>by {book.author}</h1>
                                        <h1>$ {book.price}</h1>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="quantity-box col-3">
                            {this.state.shoppingCart.map((book) => {
                                return (
                                    <CartItem userId={this.state.currentUserID} book={book} deleteBook={this.removeBookFromShoppingCart} updateQuantity={this.updateQuantity} />
                                );
                            })}
                        </div>
                    </div>
                    <div className="row">
                        <div className = "checkout-box">
                            <h1> Your Total: {this.state.cartTotal} </h1>
                            <PayPalScriptProvider options={{ "AUYAwm7oN_UntsxzkMv8qp2cXRSfxZ1TmQTaljBs0cI_qM4_3fUt5zpcywj3yPJgeDaUTPLzEflsDDNx": "BookStore" }}>
                            <PayPalButtons className="paypal-btns"
                            createOrder={(data, actions) => this.createOrder(data, actions)}
                            onApprove={(data, actions) => this.onApprove(data, actions)}
                            />
                            </PayPalScriptProvider>
                            <button type="button" onClick={this.onClickCheckout}>Acme Checkout</button>
                            
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CartPage;