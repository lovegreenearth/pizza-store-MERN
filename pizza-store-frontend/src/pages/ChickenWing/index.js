import { React, useState, useEffect } from "react"
import "./style.scss"
import Radio from "../../components/Radio";
import Quantity from "../../components/Button/qty";
import Button from "../../components/Button/button1";
import ChickenWing from "../../assets/img/classic-buffalo-wings.png"
import Basic from "../../assets/img/traditional-chickenWing.png"
import { BsCheckCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToChicken } from "../../redux/actions";
import axios from "axios";


const ChickenWings = (props) =>  {
  const [ chickenWingData, setChickenWingData ] = useState([]);
  const [ quantity, setQuantity ] = useState(1)
  const chickenWings = [ "Tossed Sauce", "Onside Sauce" ];
  const wingStyle = [ "Bread", "Non-Breaded" ];
  const amountSauce = [ "Regular Sauce on Wings", "Light Sauce on Wings", "Extra Sauce on Wings" ];
  const garlicSauce = [ "Garlic Bread Plair", "Garlic Bread Cheese" ];
  const [ wingSauceData, setWingSauceData ] = useState([])
  const wingSauce = chickenWingData.map((item) => item.name);
  const [ data, setData ] = useState({});
  const [ active, setActive ] = useState([]);
  const [ validate, setValidate ] = useState([false, false, false, false, false])

  useEffect(() => {

    axios.post('/chickenWingSauce', {

    })
    .then(res => res.data)
    .then(data => {
      setChickenWingData(data)
      setActive(Array(data.length).fill(false))
    })
    }, [])

  const dispatch = useDispatch();

  const addCart = () => {
    const newChicken = {
      name: JSON.parse(localStorage.getItem("product")).name,
      price: JSON.parse(localStorage.getItem("product")).price.price,
      quantity: quantity,
    } 
    dispatch(addToChicken(newChicken))
  }
  
  const getData = (title, item) => {
    setData({...data, [title]: item});
    if(title === '12 Chicken Wings') {
      let index;
      index = 0;
      let temp = [...validate]
      temp[index] = true
      setValidate(temp)
    }
    if(title === 'Wings Style') {
      let index;
      index = 1;
      let temp = [...validate]
      temp[index] = true
      setValidate(temp)
    }
    if(title === 'Amount of Sauce') {
      let index;
      index = 2;
      let temp = [...validate]
      temp[index] = true
      setValidate(temp)
    }
    if(title === 'Garlic Bread') {
      let index;
      index = 3;
      let temp = [...validate]
      temp[index] = true
      setValidate(temp)
    }

  }
  
  
  let select = [...wingSauceData]
  const selectOption = (item, index) => {
    if(select.filter(c => c === item).length > 0) {
      const tempIndex = select.indexOf(select.filter(c => c === item)[0]);
      select.splice(tempIndex, 1);
    } else {
      select.push(item);
    }
    setWingSauceData(select);

    if(select.length === JSON.parse(localStorage.getItem("product")).bonusTopping) {
      let temp = [...validate];
      temp[4] = true;
      setValidate(temp)
    } else {
      let temp = [...validate];
      temp[4] = false;
      setValidate(temp)
    }

    let activeSelect = [...active]
    if(activeSelect[index] === false) {
      activeSelect[index] = true
    } else {
      activeSelect[index] = false
    }
    setActive(activeSelect)
  }
  
  const name = JSON.parse(localStorage.getItem("product")).name;
  const carts = useSelector(state => state.items);
  const isAdded = carts.findIndex(v => v.name === name) === -1;
  return (
    <div className="chicken-content">
      <img className="background" src={ChickenWing} alt="ChickenWing" />
      <div className="chickenWing-config">
        <div className="blocks">
          <div className="chicken-title">{ JSON.parse(localStorage.getItem("product")).name }</div>
          <div className="block-group" >
            <div className="customize-block">
              <div className="block-content">
                <div>
                  <img className="basic-img" src={Basic} alt="basic" />
                  <div className="add-cart">
                    <div className="quantity-price">
                      <Quantity onChange={(qty) => setQuantity(qty)} />
                      <div className="price">{ "$ " + (JSON.parse(localStorage.getItem("product")).price.price * quantity).toFixed(2) }</div>
                    </div>
                    <Button Class="chicken-Btn" 
                      // Class={"chicken-Btn" + (!isAdded ? " active" :"")}
                      onClick={() => addCart()}
                      value={!isAdded  ? "ADDED" : "ADD TO CART"}
                      status={validate.filter(item => item === false).length > 0 || !isAdded ? true : false}
                      />
                  </div>
                </div>

                <div className="note">
                  {
                    Object.entries(data).map(([key, value]) => 
                      <div className="option" key={key}>
                        <div><BsCheckCircleFill /></div>
                        <div className="txt">{value}</div>
                      </div>
                  )}
                  {
                    wingSauceData.map((item) => 
                      <div className="option" key={item}>
                        <div><BsCheckCircleFill /></div>
                        <div className="txt">{item}</div>
                      </div>
                  )}

                </div>
              </div>
            </div>
            <div className="select-block">
              <div className="select-block-title" >{JSON.parse(localStorage.getItem("product")).bonus}</div>
              <div className="top-bottom">
                <div className="top-block">
                  <Radio title="12 Chicken Wings" content={chickenWings} onChange={getData} />
                  <Radio title="Wings Style" content={wingStyle} onChange={getData}  />
                  <Radio title="Amount of Sauce" content={amountSauce} onChange={getData}  />
                  <Radio title="Garlic Bread" content={garlicSauce} onChange={getData}  />
                </div>
                <div className="bottom-block" style={{border: active.filter(c => c === true).length === 1 ? "2px solid #FCA017" : "1px solid #FCA017" }} >
                  <div className="bottom-content">
                    <div className="title-group">
                      <div className="bottom-title">Wing Sauce(Select {JSON.parse(localStorage.getItem("product")).bonusTopping})<span>(required)</span></div>
                      {
                        active.filter(c => c === true).length > JSON.parse(localStorage.getItem("product")).bonusTopping
                        ? <div className="alert-msg">You can select maximum {JSON.parse(localStorage.getItem("product")).bonusTopping} Sauces</div>
                        : ""
                      }
                    </div>
                    <div className="option-group">
                      {
                        wingSauce.map((item, index) => {
                          return (
                            <div key={index} className='new-option' onClick={() => selectOption(item, index)}>
                              {
                                active[index] ? <BsCheckCircleFill style={{color: "#FCA017"}} /> : <div className='new-check' />
                              }
                              <div className="new-content">{item}</div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
  )
}

export default ChickenWings;

