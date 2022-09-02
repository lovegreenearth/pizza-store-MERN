import { React, useState } from 'react'
import "./style.scss";

const Radio = (props) => {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const radioOne = () => {
    setOne(true);
    setTwo(false);
    props.onChangeState(props.title, props.contentOne);
  }
  const radioTwo = () => {
    setOne(false);
    setTwo(true);
    props.onChangeState(props.title, props.contentTwo);
  }
  return (
    <div className='radio-group'>
      <div className='radio-title'>{props.title}</div>
      <div className='radio-option'>
        <div className='radio-button' style={{border: (one ? "2px solid #ee5a00" : "2px solid grey") }} onClick={radioOne}>
          <div className={one ? 'select' : ''} />
        </div>
        <div className='radio-content' style={{color: (one ? "#ee5a00" : "grey") }}>{props.contentOne}</div>
      </div>
    
      <div className='radio-option'>
        <div className='radio-button' style={{border: (two ? "2px solid #ee5a00" : "2px solid grey") }} onClick={radioTwo}>
          <div className={two ? 'select' : ''} />
        </div>
        <div className='radio-content' style={{color: (two ? "#ee5a00" : "grey") }}>{props.contentTwo}</div>
      </div>
    </div>
  )
}
export default Radio;
