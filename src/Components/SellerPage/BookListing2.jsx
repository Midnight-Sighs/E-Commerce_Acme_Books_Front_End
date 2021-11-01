import React, { useState, useEffect } from 'react'
import Book from './book'
import axios from "axios";

export default function BookListing(props) {
    const [bookList, setBookList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)
    console.log(props)
    console.log(bookList)

    useEffect(() => {
        refreshBookList();
    }, [])
    //{props.currentUserID.Id}
    const baseURL = 'https://localhost:44394/api/book'
    const urlSeller = '/seller/' + props.currentUser.id
    const editURL = '/edit/'
    const deleteURL = '/delete/'

    const bookAPI = () => {
        console.log(baseURL+urlSeller)
        return {
            fetchAll: () => axios.get(baseURL + urlSeller),
            create: newRecord => axios.post(baseURL, newRecord),
            update: (BookId, updatedRecord) => axios.put(baseURL + editURL + BookId, updatedRecord),
            delete: id => axios.delete(baseURL + deleteURL + id)
        }
    }

    function refreshBookList() {
        bookAPI().fetchAll()
            .then(res => {
                setBookList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('bookId') == "0")
        bookAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshBookList();
                })
                .catch(err => console.log(err))
        else
        bookAPI().update(formData.get('BookId'), formData)
                .then(res => {
                    onSuccess();
                    refreshBookList();
                })
                .catch(err => console.log(err))

    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?'))
            bookAPI().delete(id)
                .then(res => refreshBookList())
                .catch(err => console.log(err))
    }

    const imageCard = data => (
        <div className="card" onClick={() => { showRecordDetails(data) }}>
            <img src={data.imageSrc} className="card-img-top rounded-circle" />
            <div className="card-body">
                <h5>{data.title}</h5>
                <span>{data.author}</span> <br />
                <button className="btn btn-light delete-button" onClick={e => onDelete(e, parseInt(data.BookId))}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )


    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid py-4">
                    <div className="container text-center">
                        <h1 className="display-4">My book listings</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <Book
                    addOrEdit={addOrEdit}
                    recordForEdit={recordForEdit}
                />
            </div>
            <div className="col-md-8">
                <table>
                    <tbody>
                        {
                            //tr > 3 td
                            [...Array(Math.ceil(bookList.length / 3))].map((e, i) =>
                                <tr key={i}>
                                    <td>{imageCard(bookList[3 * i])}</td>
                                    <td>{bookList[3 * i + 1] ? imageCard(bookList[3 * i + 1]) : null}</td>
                                    <td>{bookList[3 * i + 2] ? imageCard(bookList[3 * i + 2]) : null}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
