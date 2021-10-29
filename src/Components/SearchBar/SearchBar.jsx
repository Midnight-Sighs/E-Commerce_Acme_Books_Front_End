import react, {Component} from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm : '',
            books: [],
            searchResults: [],
        }
    }

    componentDidMount(){
        this.setState({
            books: this.props.books
        })
    }

    handleChange = (event) =>{
        this.setState({
            searchTerm : event.target.value
        })
        console.log(this.state.searchTerm)
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const searchTerm = this.state.searchTerm
        console.log("search term from search Bar:" + searchTerm)
        this.searchBooks()
        // this.props.formSubmission(searchTerm)
    }

    searchBooks = () =>{
        let tempSearchResults = []
        let tempBookList=this.state.books
        let tempTerm = this.state.searchTerm
        tempBookList.map(function(book){
            if(book.title.includes(tempTerm)||book.author.includes(tempTerm)||book.isbn.includes(tempTerm)||book.genre.includes(tempTerm)||book.releaseYear.includes(tempTerm)){
                tempSearchResults.push(book);
            }
        })
        this.setState({
            searchResults: tempSearchResults
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label className="search-label" htmlFor="header-search"></label>
                <input
                    className = "search-field"
                    type="text"
                    id="header-search"
                    placeholder="Search books..."
                    name="s"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                />
                <button className="search-btn" type="submit">Search</button>
            </form>
        )
    }
}

export default SearchBar;