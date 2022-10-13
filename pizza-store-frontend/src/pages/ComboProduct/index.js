import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import './style.scss'
import StaticBanner from "../../assets/img/special.jpg"

const ComboProduct = () => {
  let params = useParams()
  const [comboData, setComboData] = useState([])
  
  useEffect(() => {
    fetch(`${localStorage.getItem('apiURL')}/combo/bySpecial`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data: { id: params.index } })
    })
    .then(res => res.json())
    .then(combo => {
      
    setComboData(combo.filter(top => top._id === params.combo)[0])
    })
  }, [])
  console.log(comboData)

  return (
    <div>
      <div className='detail-banner'>
        <img src={StaticBanner} alt="Banner" />
      </div>
      
    </div>
  )
}
  
export default ComboProduct;
