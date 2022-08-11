import React from 'react'
import "./style.scss"
import MeatPizza from "../../assets/img/HomeProduct/meat_favourites.png"
import {ProductData} from "./ProductData";
import { useParams } from "react-router-dom";
import Button_1 from '../../components/Button/button1';

const Product = () => {
  console.log(ProductData)
  let params = useParams()
  console.log(params.id)
  return (
    <div className='product-container col-lg-10'>
      <div className='product-header'>
        <div className='header-title'>
          <p className='title'>CREAT YOUR OWN</p>
        </div>
        <img src={MeatPizza} alt="#" className='header-img' />
      </div>
      <div className='product-content'>
        <div className='product-box'>
          {
            ProductData.MeatProduct.map(meat => {
              return (
                <div className='individual-pizza'>
                  <div className='pizza-img'><img src={meat.src.src} className="img" alt='meat.src.alt' /></div> 
                  <div className='pizza-content'>
                    <div className='title'>{meat.title}</div>
                    <div>{meat.desc}</div>
                    <div className='content-footer'>
                      <div className='cals'>Staring from $ {meat.price}</div>
                      <div className='button'>
                        <Button_1 
                          value={meat.button_value}
                          />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Product;