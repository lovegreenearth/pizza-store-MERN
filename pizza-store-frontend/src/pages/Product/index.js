import React, { useState, useEffect } from 'react'
import "./style.scss"
import MeatPizza from "../../assets/img/HomeProduct/meat_favourites.png"
import { useParams } from "react-router-dom";
import Button from '../../components/Button/button1';
import { useNavigate } from "react-router-dom";
import Static from "../../assets/img/MeatProduct/bacondblchburg.png"

const Product = () => {

  let params = useParams()
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [pizzaData, setPizzaData] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/menus`, {
        method: 'POST',
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
  }, [])

  const toCustomize = (pizza) => {
    localStorage.setItem('pizza', JSON.stringify(pizza));
    if (params.id === '62f34ad91394ef1158cfab66') {
      navigate("/chickenWings");
    } else {
      navigate("/customize")
    }
  }

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
              pizzaData.map((item, index) => {
                return (
                  <div className='individual-pizza' key={index}>
                    <div className='pizza-img'><img src={Static} alt='meat.src.alt' /></div> 
                    <div className='pizza-content'>
                      <div className='title'>{item.name}</div>
                      <div className='content-desc'>{item.bonus}</div>
                      <div className='content-footer'>
                        <div className='cals'>Staring from $ {item.price}</div>
                        <Button value="Customize" onClick={() => toCustomize(item)}/>
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