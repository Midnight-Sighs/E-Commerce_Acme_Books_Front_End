import React, { Component, useEffect } from 'react';
import axios from 'axios';
import BookDetails from '../../Components/BookDetails/BookDetails'

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
            sllComparison: undefined,
          }
    }

    //#region Axios Calls
  getBook = async () =>{
    console.log('Getting single book' + secondLevelLocation)
    const response = await axios.get('https://localhost:44394/api/book/' + secondLevelLocation);
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
    if (this.props.bookId !== this.state.sllComparison) {
      console.log("starting componenet did update")
      this.getBook();
      let sll = this.props.bookId
      this.setState({
        sllComparison : sll
      })
    }}


    componentDidMount() {
      console.log('getting book on BookDetailsPage')
      this.getBook();
      this.getReviews();

      let sll = parseInt(secondLevelLocation)
      this.setState({
        sllComparison : sll
      })
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
            <p>We are at {secondLevelLocation}</p>
            <BookDetails book={this.state.book} reviews={this.state.allBookReviews} setSLLComparison={this.setSLLComparison} setNewReview={this.setNewReview} />
            </>
         );
    }
}
 
export default BookDetailPage;