import React, { useState } from "react";
import axios from "axios";
import "./style.scss";

const FileUpload = () => {

  const [newPic, setNewPic] = useState([]);
  const [newWhole, setNewWhole] = useState('');
  const [newRight, setNewRight] = useState('');
  const [newLeft, setNewLeft] = useState('');
  const [newName, setNewName] = useState('');
  const [newCal, setNewCal] = useState('');
  const [newPice, setNewPrice] = useState('');
  const [newCategory, setNewCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('pic', newPic);

    formData.append('pic', newWhole);
    formData.append('pic', newRight);
    formData.append('pic', newLeft);

    formData.append('name', newName);
    formData.append('cal', newCal);
    formData.append('price', newPice);
    formData.append('category', newCategory);

    console.log("formData-----", formData)

    axios.post('http://localhost:5000/topping/fileupload', formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handlePic = (e) => {
    setNewPic(e.target.files[0])
  }
  const handleWhole = (e) => {
    setNewWhole(e.target.files[0])
  }
  const handleRight = (e) => {
    setNewRight(e.target.files[0])
  }
  const handleLeft = (e) => {
    setNewLeft(e.target.files[0])
  }
  
  const handleName = (e) => {
    setNewName(e.target.value);
  }
  const handleCal = (e) => {
    setNewCal(e.target.value);
  }
  const handlePrice = (e) => {
    setNewPrice(e.target.value);
  }
  const handleCategory = (e) => {
    setNewCategory(e.target.value);
  }

  return (
    <div className="size">
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <input 
          type = 'file'
          accept = '.jpg, .png, .jpeg'
          name = 'pic'
          onChange = {handlePic}
        /> <br />
        <input 
          type = 'file'
          accept = '.jpg, .png, .jpeg'
          name = 'whole'
          onChange = {handleWhole}
        /> <br />
        <input 
          type = 'file'
          accept = '.jpg, .png, .jpeg'
          name = 'right'
          onChange = {handleRight}
        /> <br />
        <input 
          type = 'file'
          accept = '.jpg, .png, .jpeg'
          name = 'left'
          onChange = {handleLeft}
        /> <br />
        <p>Name</p>
        <input 
          type = 'text'
          onChange = {handleName}
        /> <br />
        <p>cal</p>
        <input 
          type = 'text'
          onChange = {handleCal}
        /> <br />
        <p>price</p>
        <input 
          type = 'text'
          onChange = {handlePrice}
        /> <br />
        <p>Category</p>
        <input 
          type = 'text'
          onChange = {handleCategory}
        /> <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default FileUpload