import React, { useState, useEffect } from 'react'
import "./style.scss"
import MeatPizza from "../../assets/img/static/create_your_own.png"
import { useParams } from "react-router-dom";
import Button from '../../components/Button/button1';
import { useNavigate } from "react-router-dom";
import Static from "../../assets/img/static/bacondblchburg.png"
import DirectAddModal from './Modal';
import { useSelector } from "react-redux";


const Product = () => {

  let params = useParams()
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [pizzaData, setPizzaData] = useState([])

  useEffect(() => {
    fetch(`${localStorage.getItem('apiURL')}/menus`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        }
    })
    .then(res =>res.json())
    .then(data => {
        setTitle(data.filter(top => top._id === params.id)[0].name)
    })
    fetch(`${localStorage.getItem('apiURL')}/pizzas/byMenu`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({data: {id:params.id}})
    })
    .then(res =>res.json())
    .then(pizza => {
      pizza.forEach(object => {
        object.count = 1;
      });
      setPizzaData(pizza)
    })
    }, [])
    
  const toCustomize = (product, index) => {
    product["index"] = index
    localStorage.setItem('product', JSON.stringify(product));
    if (params.id === '633330aa6fd0146064ccf05d') {
      navigate("/chickenWings");
    } else {
      navigate("/customize")
    }
  }
  const productCart = useSelector(state => state.items);
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState({})
  const [modalPrice, setModalPrice] = useState(1)
  

  const onShow = (item, index) => {
    setModalShow(true);
    setModalData(item)
    setModalPrice(item.price.price)
    console.log(productCart.filter(v => v.name === item.name).length)
  }
  return (
      <div className='product-container'>
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
                        <div className='cals'>Staring from $ {item.price.price ? item.price.price : item.price.Small}</div>
                        
                        {
                          item.price.price 
                          ? item.customize 
                            ? <Button value="Customize" onClick={() => toCustomize(item, index)} />
                            : <Button  value={productCart.filter(v => v.name === item.name).length > 0 ? "ADDED" : "Customize"}
                                       onClick={() => onShow(item, index)}
                                       status={productCart.filter(v => v.name === item.name).length > 0 ? true : false}/>
                          : <Button value="Customize" onClick={() => toCustomize(item, index)}/>
                        }
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <DirectAddModal 
          data={modalData}
          show={modalShow}
          onHide={() => setModalShow(false)}
          price={modalPrice} />
      </div>

  )
}

export default Product;