import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import './style.scss'
import axios from "axios";
import Button from '../../components/Button/button1';
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import Customize from "./pizza/index";
import FreeDipModal from './FreeDip';
import ExtraDipModal from './ExtraDip';

import StaticBanner from "../../assets/img/special.jpg"
import Static from "../../assets/img/static/bacondblchburg.png"

const ComboProduct = (props) => {
  let params = useParams();
  // let navigate = useNavigate();
  const [ comboData, setComboData ] = useState({product:[]});
  const [ comboCount, setComboCount ] = useState(1);
  const [ active, setActive ] = useState([]);
  const [ freeDipShow, setFreeDipShow ] = useState(false);
  const [ ExtraDipShow, setExtraDipShow ] = useState(false);
  const [ dipData, setDipData ] = useState([]);
  const [ freeDipIndex, setFreeDipIndex ] = useState(0)
  const [ selectDip, setSelectDip ] = useState([false]);
  const [ selectExtraDip, setSelectExtraDip ] = useState([false])

  // calculate price state variable
  const [ comboPrice, setComboPrice] = useState(comboData.price)
  const [extraDipPrice, setExtraDipPrice] = useState(0)


  // add to Combo Product
  const [ freeDip, setFreeDip ] = useState([]);
  const [ extraDip, setExtraDip ] = useState([]);
  
  useEffect(() => {
    let temp
    axios.post('/combo/bySpecial', {
      data: { id: params.index }
    })
    .then(res => res.data)
    .then(combo => {
      setComboData(combo.filter(top => top._id === params.combo)[0])
      setActive(Array(combo.filter(top => top._id === params.combo)[0].product.length).fill(false))
      setComboPrice(combo.filter(top => top._id === params.combo)[0].price)
      temp = combo.filter(top => top._id === params.combo)[0].product.filter(item => item.type === "other").length;
    })
    

    axios.post('/dip', {

    })
    .then(res => res.data)
    .then (data => {
      setDipData(data)
      setSelectDip(Array(temp).fill(Array(data.length).fill(false)))
      setSelectExtraDip(Array(data.length).fill(false))
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

  const goCustomize =(item, index) => {
    if(item.type === "pizza") {
      <Customize data={item.name} />
    }
    if(item.type === "other") {
      setFreeDipShow(true);
      comboData.product.filter(item => item.type === "other").map((c, _index) => c.name === item.name && setFreeDipIndex(_index))
    }
    if(item.type === "Extra Other") {
      setExtraDipShow(true);
    }
  }

  const comboToCart = () => {
    const newCombo ={
      name: comboData.name,
      // price: comboData.price,
      price: (comboData.price + extraDipPrice).toFixed(2),
      quantity: comboCount,
      "Free Dip": freeDip,
      "Extra Dip": extraDip
    }
    console.log(newCombo)
    console.log("active ----", active)
  }

  const selectFreeDip = (index) => {
    setSelectDip(temp => {
      const newArray = [...selectDip];
      newArray[freeDipIndex] = selectDip[freeDipIndex].map((_, _index) => index === _index)
      return newArray
    })
  }
  const addFreeToCombo = () => {
    let temp = [...selectDip[freeDipIndex]]
    let tempSelected = comboData.product.filter((item) => item.type === "other")[freeDipIndex].name
    if(temp.filter(item => item === true).length > 0) {
      let tempIndex = temp.findIndex(item => item === true)

      setFreeDip(temp => {
        const newArray = [...freeDip];
        newArray[freeDipIndex] = dipData[tempIndex].name;
        return newArray;
      })

      let tempActiveNo = comboData.product.findIndex((item) => item.name === tempSelected)
      setActive(temp => {
        const newArray = [...active];
        newArray[tempActiveNo] = true;
        return newArray
      })
    }
  }

  let dipDataName = [];
  dipData.map(item => {
    return (
      dipDataName.push(item.name)
    )
  })
  const activeExtraDip = (index) => {
    if(selectExtraDip[index]) {
      setSelectExtraDip(tempExtra => {
        const newArray = [...selectExtraDip];
        newArray[index] = false;
        return newArray;
      })
      setComboPrice(comboPrice - dipData[index].price)
      
      
    } else {
      setSelectExtraDip(tempExtra => {
        const newArray = [...selectExtraDip];
        newArray[index] = true;
        return newArray;
      })
      setComboPrice(comboPrice + dipData[index].price)
    
    }
  }
  const addExtraToCombo = () => {
    let tempPrice = comboPrice - comboData.price
    setExtraDipPrice(tempPrice)
    
    let tempIndex = comboData.product.findIndex(item => item.type === "Extra Other")
    if(selectExtraDip.filter(item => item === true).length > 0) {
      setActive(temp => {
        const newArray = [...active];
        newArray[tempIndex] = true;
        return newArray
      })
    }
    
    let temp = []
    for(let i = 0; i < dipDataName.length; i++) {
      if(selectExtraDip[i]) {
        temp.push(dipDataName[i])
      }
    }
    setExtraDip(temp)
  }

  return (
    <div>
      <div className='detail-banner'>
        <img src={StaticBanner} alt="Banner" />
      </div>
      <div className='detail-caption'>
        <div className='caption-title'>{comboData.name}</div>
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
              <div className='count-price'>{"$ " + ((comboData.price + extraDipPrice) * comboCount).toFixed(2)}</div>
            </div>
            <Button 
              value="Add to Cart"
              // status={active.filter(item => item === false).length > 0 ? true : false}
              onClick={() => comboToCart()}
              />
          </div>
        </div>
      </div>
      <div className='combo-product'>
        {
          comboData.product.map((item, index) => {
            return (
              <div className='combo-individual' key={item.name}>
                <div className='individual-type'>
                  {
                    item.type === "pizza" && 
                    <div className='individual-title'>
                      Choose Size and Toppings
                    </div>
                  }
                  {
                    item.type === "chicken" && 
                    <div className='individual-title'>Choose Chicken Wings</div>
                  }
                  {
                    item.type === "other" && 
                    <div className='individual-title'>Free Dip</div>
                  }
                  {
                    item.type === "Extra Other" && 
                    <div className='individual-title'>Extra Dip</div>
                  }
                  <div className='individual-product'>
                    <div className='product-img'>
                      <img src={Static} alt="Combo Product" />
                    </div>
                    <div className='product-content'>
                      <div className='content-title'>{item.name}</div>
                      <Button
                        Class={active[index] ? "selected" : ""}
                        value={active[index] ? "Edit": "Customize"} 
                        onClick={() => goCustomize(item, index)} 
                        />
                    </div>
                  </div>
                  
                </div>
              </div>
            )
          })
        }
      </div>
      <FreeDipModal 
        show={freeDipShow}
        onHide={() => {setFreeDipShow(false); addFreeToCombo();}}
        content={dipData}
        check={selectDip[freeDipIndex]}
        onSelect={ (index) => selectFreeDip(index) }
      />
      <ExtraDipModal 
        show={ExtraDipShow}
        onHide={() => {setExtraDipShow(false); addExtraToCombo();}}
        content={dipData}
        price={comboPrice}
        check={selectExtraDip}
        onSelect={ (index) => activeExtraDip(index) }
      />

    </div>
  )
}
  
export default ComboProduct;
