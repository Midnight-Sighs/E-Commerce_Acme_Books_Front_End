import react, {Component} from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm : '',
        }
    }

    handleChange = (event) =>{
        this.setState({
            searchTerm : event.target.value
        })
        console.log(this.state.searchTerm)
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.formSubmission(this.state.searchTerm)
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
                />
                <button className="search-btn" type="submit">Search</button>
            </form>
        )
    }
}

export default SearchBar;