import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import './style.scss'
import axios from "axios";
import Button from '../../components/Button/button1';
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import PizzaCustomization from "./pizza";
import FreeDipModal from './FreeDip';
import ExtraDipModal from './ExtraDip';
import ChickenWingCustomization from './ChieckenWing';
import { useDispatch } from "react-redux";
import { addToCombo } from '../../redux/actions';

import StaticBanner from "../../assets/img/special.jpg"
import Static from "../../assets/img/static/bacondblchburg.png"

const ComboProduct = (props) => {
  let params = useParams();
  // let navigate = useNavigate();
  const [ comboData, setComboData ] = useState({product:[]});
  const [ comboCount, setComboCount ] = useState(1);
  const [ active, setActive ] = useState([]);
  const [ index, setIndex ] = useState(0)
  const [ dipData, setDipData ] = useState([]);
  const [ freeDipIndex, setFreeDipIndex ] = useState(0)
  const [ selectDip, setSelectDip ] = useState([false]);
  const [ selectExtraDip, setSelectExtraDip ] = useState([false]);
  const [ selectPizza, setSelectPizza ] = useState([0]);

  // Show child component
  const [ freeDipShow, setFreeDipShow ] = useState(false);
  const [ ExtraDipShow, setExtraDipShow ] = useState(false);
  const [ pizzaShow, setPizzaShow ] = useState(false);
  const [ pizzaTitle, setPizzaTitle ] = useState("");  // Set pizza child component's title
  // const [ pizzaPrice, setPizzaPrice ] = useState(0)
  const [ chickenShow, setChickenShow ] = useState(false);
  const [ chickenIndex, setChickenIndex ] = useState(0);
  const [ chickenData, setChickenData ] = useState({})

  // calculate price state variable
  // const [ comboPrice, setComboPrice] = useState(0);
  const [ toppingPrice, setToppingPrice ] = useState(0)
  const [ extraDipPrice, setExtraDipPrice ] = useState(0)

  // add to Combo Product
  const [ freeDip, setFreeDip ] = useState([]);

  
  const totalComboPrice = comboData.price + toppingPrice + extraDipPrice
  const newCombo = {
    name: comboData.name,
    quantity: comboCount,
  }
  const [ combo, setCombo ] = useState(newCombo)

  useEffect(() => {
    setCombo({
      ...combo,
      name: comboData.name,
    })
  }, [comboData])

  useEffect(() => {
    setCombo({
      ...combo,
      quantity: comboCount
    })
  }, [comboCount])

  useEffect(() => {
    let temp
    axios.post('/combo/bySpecial', {
      data: { id: params.index }
    })
    .then(res => res.data)
    .then(combo => {
      setSelectPizza(Array(combo.filter(top => top._id === params.combo)[0].product.filter(item => item.type === "pizza").length).fill(0))
      setComboData(combo.filter(top => top._id === params.combo)[0])
      setActive(Array(combo.filter(top => top._id === params.combo)[0].product.length).fill(false))
      // setComboPrice(combo.filter(top => top._id === params.combo)[0].price)
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
    if (comboCount > 1) {
      setComboCount(comboCount - 1 )
    }
  }

  const plus = () => {
    setComboCount(comboCount + 1 )
  }

  const goCustomize =(item, index) => {
    if(item.type === "pizza") {
      setPizzaShow(true)
      setPizzaTitle(item.name)
      document.body.style.overflow = "hidden";
      setIndex(index)
    }
    if (item.type === "chicken") {
      setChickenShow(true);
      setChickenIndex(comboData.product.findIndex(combo => combo.name === item.name));
      setChickenData(item)
    }
    if(item.type === "other") {
      setFreeDipShow(true);
      comboData.product.filter(item => item.type === "other").map((c, _index) => c.name === item.name && setFreeDipIndex(_index))
    }
    if(item.type === "Extra Other") {
      setExtraDipShow(true);
    }
  }

  const dispatch = useDispatch();
  const comboToCart = () => {
    dispatch(addToCombo(combo))
  }

  const selectFreeDip = (item, index) => {
    setSelectDip(temp => {
      const newArray = [...selectDip];
      newArray[freeDipIndex] = selectDip[freeDipIndex].map((_, _index) => index === _index)
      return newArray
    })

    setFreeDip(temp => {
      const newArray = [...freeDip];
      newArray[freeDipIndex] = item.name;
      return newArray;
    })
  }

  const addFreeToCombo = () => {
    let temp = [...selectDip[freeDipIndex]]
    let tempSelected = comboData.product.filter((item) => item.type === "other")[freeDipIndex].name
    if(temp.filter(item => item === true).length > 0) {
      
      let tempCombo = {...combo}
      tempCombo = {...combo, "Free Dip": freeDip }
      setCombo(tempCombo)                           // add FreeDip array to Combo

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
      
      
    } else {
      setSelectExtraDip(tempExtra => {
        const newArray = [...selectExtraDip];
        newArray[index] = true;
        return newArray;
      })
      setExtraDipPrice(extraDipPrice + dipData[index].price)
    }
  }
  const addExtraToCombo = () => {
    
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
    let tempCombo = {...combo}
    tempCombo = {...combo, "Extra Dip": temp , "price": (totalComboPrice).toFixed(2) }
    setCombo(tempCombo)
  }
  const pizzaHide = (item, total, priceTopping) => {
    setPizzaShow(false);
    document.body.style.overflow = "auto";
    setActive(temp => {
      const newArray = [...active];
      newArray[index] = true;
      return newArray
    })
    setToppingPrice(priceTopping)

    let temp = {...combo}
    temp = {...temp, [pizzaTitle] : total, "price" : (totalComboPrice + priceTopping).toFixed(2) }
    setCombo(temp)

    setSelectPizza(temp => {
      const newArray = [...selectPizza];
      newArray[index] = item;
      return newArray
    })
  }
  const onChickenNext = (data) => {
    setChickenShow(false)
    setActive(temp => {
      const newArray = [...active];
      newArray[chickenIndex] = true;
      return newArray
    })
    let tempCombo = {...combo}
    tempCombo = {...combo, "Chicken": data}
    setCombo(tempCombo)
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
              <div className='count-price'>{"$ " + ((totalComboPrice) * comboCount).toFixed(2)}</div>
            </div>
            <Button 
              value="Add to Cart"
              status={active.filter(item => item === false).length > 0 ? true : false}
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
        onSelect={ (item, index) => selectFreeDip(item, index) }
      />
      <ExtraDipModal 
        show={ExtraDipShow}
        onHide={() => {setExtraDipShow(false); addExtraToCombo();}}
        content={dipData}
        price={totalComboPrice}
        check={selectExtraDip}
        onSelect={ (index) => activeExtraDip(index) }
      />
      <PizzaCustomization
        show={pizzaShow}
        onHide={(item, total, priceTopping) => pizzaHide(item, total, priceTopping)}
        title={pizzaTitle}
        data={selectPizza[index]}
        status={active[index]}
        price={totalComboPrice - toppingPrice}
      />
      <ChickenWingCustomization 
        show={chickenShow}
        onHide={() => onChickenNext()}
        data={chickenData}
        onChickenNext={(data) => onChickenNext(data)}
      />
    </div>
  )
}
  
export default ComboProduct;
