import React, { useState, useEffect } from 'react'
import "./style.scss"
import MeatPizza from "../../assets/img/HomeProduct/meat_favourites.png"
import {ProductData} from "./ProductData";
import { useParams } from "react-router-dom";
import Button_1 from '../../components/Button/button1';
import Customization from '../Customization';
import { useNavigate } from "react-router-dom";
import Static from "../../assets/img/MeatProduct/bacondblchburg.png"

const Product = () => {

  let params = useParams()
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [pizzaData, setPizzaData] = useState([])
  useEffect(
    () => {
        fetch(`http://localhost:5000/menus`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json"
            }
        })
        .then(res =>res.json())
        .then(data => {
            setTitle(data.filter(top => top._id === params.id)[0].name)
        })
        fetch(`http://localhost:5000/pizzas/byMenu`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body:JSON.stringify({data: {id:params.id}})
        })
        .then(res =>res.json())
        .then(pizzaData => {
          setPizzaData(pizzaData)
        })
    }
    , []
  )
  return (
      <div className='product-container col-lg-10'>
        <div className='product-header'>
          <div className='header-title'>
            <p className='title'>{title}</p>
          </div>
          <img src={MeatPizza} alt="#" className='header-img' />
        </div>
        <div className='product-content'>
          <div className='product-box'>
            {
              pizzaData.map(meat => {
                return (
                  <div className='individual-pizza'>
                    <div className='pizza-img'><img src={Static} className="img" alt='meat.src.alt' /></div> 
                    <div className='pizza-content'>
                      <div className='title'>{meat.name}</div>
                      <div className='content-desc'>{meat.bonus}</div>
                      <div className='content-footer'>
                        <div className='cals'>Staring from $ {meat.price}</div>
                        <Button_1 
                            value="Customize"
                            onClick={() => navigate("/customize")}/>
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