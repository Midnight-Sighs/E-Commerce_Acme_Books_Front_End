import React, { Component, useEffect } from 'react';
import axios from 'axios';
import BookDetails from '../../Components/BookDetails/BookDetails'
import { withRouter } from 'react-router-dom';

console.log(window.location.pathname)
var pathArray = window.location.pathname.split('/');
var secondLevelLocation = pathArray[2];
console.log(secondLevelLocation)

class BookDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book:[],
            allBookReviews:[],
            bookId : this.props.bookId,
            endpoint:""
          }
    }

    //#region Axios Calls
  getBook = async () =>{
    console.log(window.location.pathname)
    console.log('Getting single book' + this.state.endpoint)
    let endpoint = parseInt(this.state.endpoint)
    const response = await axios.get('https://localhost:44394/api/book/' + endpoint);
    this.setState({
      book: response.data
    })
    console.log(this.state.book)
  }

  getReviews = async () =>{
    const response = await axios.get('https://localhost:44394/api/reviews');
    this.setState({
      allBookReviews: response.data
    })
  }
  postReview = async (newReview) =>{
    try{
      const response = await axios.post('https://localhost:44394/api/reviews/create', newReview);
      this.setState({})
      console.log("Review successfully created")
    }
    catch (err){
      console.log("Error creating review", err)
    }
  }
  editReviews = async () =>{
    const response = await axios.patch('https://localhost:44394/api/review/edit${}');
    this.setState({

    })
  }
  deleteReview = async (reviewID) =>{
    const response = await axios.delete('https://localhost:44394/api/review/delete/' + reviewID);
    this.setState({

    })
  }

  //#endregion

  componentDidUpdate() {
    if (this.state.bookId !== secondLevelLocation) {
      console.log("starting componenet did update")
      this.getBook(secondLevelLocation);
      this.setState({
        bookId: secondLevelLocation
      })
    }}


    componentDidMount() {
      console.log('getting book on BookDetailsPage')
      this.setState({
        endpoint: secondLevelLocation
      })
      this.getBook();
      this.getReviews();

      //this.getShoppingCart();
      // this.getCurrentUser();
    }
    
    setNewReview = (review, rating, bookId) =>{
      let newReview = {
        "bookId" : bookId,
        "rating" : rating,
        "review" : review
      }
      this.postReview(newReview);
    }

    render() { 
        return ( 
            <>
            <BookDetails book={this.state.book} reviews={this.state.allBookReviews} setNewReview={this.setNewReview} />
            </>
         );
    }
}
 
export default withRouter (BookDetailPage);