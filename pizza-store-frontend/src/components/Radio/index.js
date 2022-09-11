import { React, useState } from 'react'
import "./style.scss";
import { BsCheckCircleFill } from "react-icons/bs";

const Radio = (props) => {
  const [ active, setActive ] = useState(Array(props.content.length).fill(false))
  
  const select = (index, item) => {
    setActive(active.map((_, _index) => index === _index ? true: false))
    props.onChange(props.title, item)
  }

  return (
    <div className='radio-group' style={{border: active.filter(c => c === true).length === 1 ? "2px solid #FCA017" : "1px solid #FCA017"} }>
      
      <div className='radio-title'>{props.title}</div>
      { props.content.map((item, index) => 
          <div className='radio-option' onClick={() => select(index, item)} key={index}>
            {
              active[index] ? <BsCheckCircleFill style={{color: "#FCA017"}} /> : <div className='radio-check' />
            }
            <div className='radio-content'>{item}</div>
          </div>
      )}
    </div>
  )
}
export default Radio;
