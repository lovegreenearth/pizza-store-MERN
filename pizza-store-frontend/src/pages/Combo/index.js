import React, { useEffect, useState } from 'react'
import "./style.scss"
import { useParams, useNavigate } from "react-router-dom";
import Button from '../../components/Button/button1';

import StaticSpecial from "../../assets/img/special.jpg"
import StaticPanzerotti from "../../assets/img/panzerotti.jpg"

const Combo = () => {

  let params = useParams()
  let navigate = useNavigate();
  const [comboData, setComboData] = useState([]);
  const [title, setTitle] = useState("")
  useEffect(() => {
    fetch(`${localStorage.getItem('apiURL')}/pizzas/byMenu`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data: { id: params.id } })
    })
    .then(res => res.json())
    .then(pizza => {
      setTitle(pizza.filter(top => top._id === params.index)[0].name)
    })

    fetch(`${localStorage.getItem('apiURL')}/combo/bySpecial`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data: { id: params.index } })
    })
    .then(res => res.json())
    .then(combo => {
      setComboData(combo)
    })
  }, [])
  
  const customizeCombo = (item) => {
    navigate(`ComboProduct/${item._id}`)
    
  }

  return (
    <div>
      <div>
        <img className='banner-img' src={StaticSpecial} alt="Special banner" />
      </div>
      <div className='special-container'>
        <div className='special-title'>{title}</div>
        <div className='special-product'>
          {
            comboData.map((item, index) => {
              return (
                <div className='product-individual' key={item.name}>
                  <div className='left-part' style={{ gridColumn: `${index % 2 ? "1/2" : "2/3"}` }}>
                    <div className='left-title'>
                      <div className='title-color'  style={{ gridColumn: `${index % 2 ? "1/2" : "2/3"}` }} />
                    </div>
                    <div className='left-img'>
                      <img src={StaticPanzerotti} alt='panzerotti' />
                    </div>
                    <div className='left-title'>
                      <div className='title-color'  style={{ gridColumn: `${index % 2 ? "1/2" : "2/3"}` }} />
                    </div>
                  </div>
                  <div className='right-part' style={{ gridColumn: `${index % 2 ? "2/3" : "1/2"}` }}>
                    <div className='right-title'>
                      {item.name}
                      
                    </div>
                    
                    <div className='right-content'>
                    {
                      item.product.map((c) => {
                        return (
                          <div className='content-detail' key={c}>{c}</div>
                        )
                      })
                    }
                    </div>
                    <Button value="Customize" onClick={() => customizeCombo(item)} />
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

export default Combo;