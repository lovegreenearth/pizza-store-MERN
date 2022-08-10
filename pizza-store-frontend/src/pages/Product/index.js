import React from 'react'
import "./style.scss"
import MeatProduct from "../../assets/img/HomeProduct/meat_favourites.png"

const Product = () => {
  return (
    <div className='product-container col-lg-10'>
      <div className='product-header'>
        <div className='header-title'>
          <p className='title'>CREAT YOUR OWN</p>
        </div>
        <img src={MeatProduct} alt="#" className='header-img' />
      </div>
      <div className='product-content'>
        <div className='product-box'>
          {
            
          }
        </div>
      </div>
    </div>
  )
}

export default Product;