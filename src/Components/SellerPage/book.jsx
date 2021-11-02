import React, { useState, useEffect } from 'react'
import defaultImageSrc from '../../Images/defaultImg.png'
import '../Styles/Components.css'
//const defaultImageSrc = '/Images/defaultImg.png'

const initialFieldValues = {
    bookId: 0,
    title: '',
    author: '',
    description: "",
    genre: "",
    releaseYear: "",
    genre: "",
    isbn: "",
    price: "",
    userId: "",
    imageName: '',
    imageSrc: defaultImageSrc,
    imageFile: null,
    imagePath:""
}

export default function Book(props) {

    const { addOrEdit, recordForEdit } = props

    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})
    console.log(values)


    useEffect(() => {
        if (recordForEdit != null)
            setValues(recordForEdit);
    }, [recordForEdit])

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultImageSrc
            })
        }
    }

    const validate = () => {
        let temp = {}
        temp.employeeName = values.employeeName == "" ? false : true;
        temp.imageSrc = values.imageSrc == defaultImageSrc ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x == true)
    }

    const resetForm = () => {
        setValues(initialFieldValues)
        document.getElementById('image-uploader').value = null;
        setErrors({})
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (validate()) {
            let parsedPrice = parseFloat(values.price)
            const formData = new FormData()
            formData.append('Title', values.title)
            formData.append('Author', values.author)
            formData.append('Description', values.description)
            formData.append('Genre', values.genre)
            formData.append('ReleaseYear', values.releaseYear)
            formData.append('Isbn', values.isbn)
            formData.append('Price', parsedPrice)
            formData.append('Image', values.imageFile)
            formData.append('ImagePath', values.imagePath)
            formData.append('BookId', values.bookId)
            console.log(formData)
            addOrEdit(formData, resetForm)
        }
    }

    const applyErrorClass = field => ((field in errors && errors[field] == false) ? ' invalid-field' : '')
    console.log(props)
    return (
        <>
            <div className="container text-center">
                <p className="lead">Selected Book:</p>
                
            </div>
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="edit-form-card">
                    {/* <img src={values.imageSrc} className="card-img-top" /> */}
                    <img src={values.imageSrc} className="card-img-top" />
                    <div className="card-body">
                        <div className="form-group">
                            <input type="file" accept="image/*" className={"form-control-file" + applyErrorClass('imageSrc')}
                                onChange={showPreview} id="image-uploader" />
                        </div>
                        <div className="form-group">
                            <input className={"form-control" + applyErrorClass('title')} placeholder="title" name="title"
                                value={values.title}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="author" name="author"
                                value={values.author}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="description" name="description"
                                value={values.description}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="genre" name="genre"
                                value={values.genre}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="releaseYear" name="releaseYear"
                                value={values.releaseYear}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="isbn" name="isbn"
                                value={values.isbn}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="price" name="price"
                                value={values.price}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-light">Submit</button>
                        </div>
                        <input type="hidden" id="bookId" name="bookId" value={values.bookId}></input>
                        <input type="hidden" id="userId" name="userId" value={values.userId}></input>
                    </div>
                </div>
            </form>
        </>
    )
}
