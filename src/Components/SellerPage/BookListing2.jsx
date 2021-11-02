import React, { useState, useEffect } from 'react'
import Book from './book'
import axios from "axios";
import MagicBook from '../../Images/BookCrystalBall.png'
import '../../Pages/Styles/Pages.css'

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
    //book/delete/{id:int}

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
        formData.append('Id', props.currentUser.id)
        console.log(props.currentUser.id)
        console.log(formData)
        if (formData.get('BookId') == "0")
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
        if (window.confirm('Are you sure to delete this record?' + id))
            bookAPI().delete(id)
                .then(res => refreshBookList())
                .catch(err => console.log(err))
    }

    const imageCard = data => (
        <div className="edit-book-card" onClick={() => { showRecordDetails(data) }}>
            <img src={data.imageSrc} className="card-img-top" />
            <div className="edit-card-body">
                <h5>{data.title}</h5>
                <h5>{data.author}</h5> <br />
                <button className="delete-button" onClick={e => onDelete(e, parseInt(data.bookId))}>
                   Delete <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )


    return (
        <>
            <div className="body-bg-img" style={{ backgroundImage: `url(${MagicBook})`}}>
                <div className="row book-edit mt-5">
                    <div className="col-md-12">
                        <h1>My book listings</h1>
                        <p>To the right are your book listings.  Select one to edit on the left.</p>
                    </div>
                    <div className="col-sm-4 col-lg-5 mx-5 book-to-edit">
                        <Book
                            addOrEdit={addOrEdit}
                            recordForEdit={recordForEdit}
                        />
                    </div>
                    <div className="col-md-5">
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
                    <div className="col-1"></div>
                </div>
            </div>
        </>
    )
}
