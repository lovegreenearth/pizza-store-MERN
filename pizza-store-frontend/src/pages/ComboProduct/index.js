import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import './style.scss'
import axios from "axios";
import Button from '../../components/Button/button1';
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import Customize from "./pizza/index";

import StaticBanner from "../../assets/img/special.jpg"
import Static from "../../assets/img/static/bacondblchburg.png"

const ComboProduct = (props) => {
  let params = useParams();
  let navigate = useNavigate();
  const [comboData, setComboData] = useState({product:[]});
  const [comboCount, setComboCount] = useState(1);
  const [ active, setActive ] = useState([])
  
  useEffect(() => {
    axios.post('/combo/bySpecial', {
      data: { id: params.index }
    })
    .then(res => res.data)
    .then(combo => {
      setComboData(combo.filter(top => top._id === params.combo)[0])
      setActive(Array(combo.filter(top => top._id === params.combo)[0].product.length).fill(false))
    })
  }, [])

  const minus = () => {
    if (comboCount > 2) {
      setComboCount(comboCount - 1 )
    }
  }

  const plus = () => {
    setComboCount(comboCount + 1 )
  }

  const goCustomize =(item) => {
    if(item.type === "pizza") {
      <Customize data={item.name} />
    }
    <Customize data={item.name} />
    console.log(item.name)
  }


  return (
    <div>
      <div className='detail-banner'>
        <img src={StaticBanner} alt="Banner" />
      </div>
      <div className='detail-caption'>
        <div className='caption-content'>
          <div className='content-detail'>
            <div className='detail-title'>
              You've got {comboData.product.length} items to configure
            </div>
            <div className='caption'>
              {comboData.caption}
            </div>
          </div>
          <div className='content-count'>
            <div className="count-quantity">
              <button onClick={() => minus()}> <AiFillMinusCircle /> </button>
              <span>{comboCount}</span>
              <button onClick={() => plus()}> <AiFillPlusCircle /> </button>
              <div className='count-price'>{"$ " + (comboData.price*comboCount).toFixed(2)}</div>
            </div>
            <Button 
              value="Add to Cart"
              status={active.filter(item => item === false).length > 0 ? true : false}
              />
          </div>
        </div>
      </div>
      <div className='combo-product'>
        {
          comboData.product.map((item) => {
            return (
              <div className='combo-individual' key={item.name}>
                <div className='individual-type'>
                  {
                    item.type === "pizza" && 
                    <div className='individual-title'>
                      Choose Your Size and Toppings
                    </div>
                  }
                  {
                    item.type === "other" && 
                    <div className='individual-title'>Select Dip</div>
                  }
                  <div className='individual-product'>
                    <div className='product-img'>
                      <img src={Static} alt="Combo Product" />
                    </div>
                    <div className='product-content'>
                      <div className='content-title'>{item.name}</div>
                      <Button value="Customize" onClick={() => goCustomize(item)} />
                    </div>
                  </div>
                  
                </div>
              </div>
            )
          })
        }
      </div>
      
    </div>
  )
}
  
export default ComboProduct;
