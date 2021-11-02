import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import MainBody from '../../Components/MainShop/MainBody'
import { createBrowserHistory } from "history";
import React, {useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom';
import {useParams} from "react-router-dom";
const history = createBrowserHistory();
const initialFieldValues = {
        searchTerm: "",
    }



const SearchBar = (props) =>{

    console.log("************", props)
    // const [book, setBook] = useState([props.books[0]])


    useEffect(()=>{
        // let loggedIn = props.loggedIn
        
    }, [props])
    const [values, setValues] = useState(initialFieldValues)

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    const { pushSearch} = props

    const handleFormSubmit = e => {
        const mySearchTerm = values.searchTerm
        console.log(mySearchTerm)
        history.push('/SearchResults/' + mySearchTerm)
        history.go('/SearchResults/' + mySearchTerm);
    }

    return ( 
        <> 
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
            <label className="search-label" htmlFor="header-search"></label>
            <input
                className = "search-field"
                type="text"
                id="header-search"
                placeholder="Search books..."
                name="searchTerm"
                value={values.searchTerm}
                onChange={handleInputChange}
            />
            <button className="search-btn" type="submit">Search</button>
        </form>
        </>
     );
}

export default withRouter (SearchBar);


// const searchURL = '/SearchResults/' + this.state.searchTerm
// return (
//     <>


//     </>
// )
// }