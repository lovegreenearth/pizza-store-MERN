import React, {useEffect, useState} from 'react'
import './style.scss';
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import Basic from "../../../assets/img/traditional-chickenWing.png";
import Radio from '../../../components/Radio';
import { BsCheckCircleFill } from "react-icons/bs";
import Button from '../../../components/Button/button1';

const ChickenWingCustomization = (props) => {

  const chickenWings = [ "Tossed Sauce", "Onside Sauce" ];
  const wingStyle = [ "Bread", "Non-Breaded" ];
  const garlicSauce = [ "Garlic Bread Plair", "Garlic Bread Cheese" ];
  const [ active, setActive ] = useState([])
  const [ chickenWingData, setChickenWingData ] = useState([])
  const wingSauce = chickenWingData.map((item) => item.name);
  const [ data, setData ] = useState({})
  const [ validate, setValidate ] = useState([false, false, false, false])
  const [ wingSauceData, setWingSauceData ] = useState([])
  const [ selectData, setSelectData ] = useState([])
  const [ wholeData, setWholeData ] = useState([])
  

  useEffect(() => {
    axios.post('/chickenWingSauce', {

    })
    .then(res => res.data)
    .then(data => {
      setChickenWingData(data)
      setActive(Array(data.length).fill(false))
    })
    }, [])

  const getData = (title, item) => {
     setData({...data, [title]: item});
    if(title === '12 Chicken Wings') {
      let index;
      index = 0;
      let temp = [...validate]
      temp[index] = true
      setValidate(temp)
      let tempSauce = [...selectData]
      tempSauce[index] = item
      setSelectData(tempSauce)
    }
    if(title === 'Wings Style') {
      let index;
      index = 1;
      let temp = [...validate]
      temp[index] = true
      setValidate(temp)
      let tempSauce = [...selectData]
      tempSauce[index] = item
      setSelectData(tempSauce)
    }
    if(title === 'Garlic Bread') {
      let index;
      index = 2;
      let temp = [...validate]
      temp[index] = true
      setValidate(temp)
      let tempSauce = [...selectData]
      tempSauce[index] = item
      setSelectData(tempSauce)
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
    setWholeData([...selectData, ...select])

    if(select.length === props.data.free) {
      let temp = [...validate];
      temp[3] = true;
      setValidate(temp)
    } else {
      let temp = [...validate];
      temp[3] = false;
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


  return (
    <div style={{
          display: props.show ? "visible" : "hidden",
          position: 'fixed',
          top: props.show ? "0": "100vh", 
          transition: "all 1s ease-out",
          overflow: "scroll"
          }}
         className="pizza-customization"
    >
      <button className='closeButton' onClick={() => props.onHide()}><AiOutlineClose /></button>
      <div className='chicken-modal-content'>
        <div className='chicken-title'>{props.data.name}</div>
        <div className='chicken-box'>
          <div className='customize-box'>
            <div className='img-note'>
              <div>
                <img className="basic-img" src={Basic} alt="basic" />
                <Button 
                  value="Next"
                  status={validate.filter(item => item === false).length > 0 ? true : false}
                  onClick={() => props.onChickenNext(wholeData)}
                />
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
          <div className='select-box'>
            <Radio title="12 Chicken Wings" content={chickenWings} onChange={getData} />
            <Radio title="Wings Style" content={wingStyle} onChange={getData}  />
            <Radio title="Garlic Bread" content={garlicSauce} onChange={getData}  />
          </div>
        </div>
        <div className="bottom-block" 
          style={{border: active.filter(c => c === true).length === 1 ? "2px solid #FCA017" : "1px solid #FCA017" }} >
          <div className="bottom-content">
            <div className="title-group">
              <div className="bottom-title">Wing Sauce(Select {props.data.free})<span>(required)</span></div>
              {
                active.filter(c => c === true).length > props.data.free
                ? <div className="alert-msg">You can select maximum {props.data.free} Sauces</div>
                : ""
              }
            </div>
            <div className="option-group">
              {
                wingSauce.map((item, index) => {
                  return (
                    <div key={index} className='new-option' onClick={() => selectOption(item, index)}>
                      {
                        active[index] 
                        ? <BsCheckCircleFill style={{color: "#FCA017"}} /> 
                        : <div className='new-check' />
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
  )
}

export default ChickenWingCustomization;