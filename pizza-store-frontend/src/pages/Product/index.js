import React, { useState } from 'react'
import "./style.scss"
import MeatPizza from "../../assets/img/HomeProduct/meat_favourites.png"
import {ProductData} from "./ProductData";
import { useParams } from "react-router-dom";
import Button_1 from '../../components/Button/button1';
import Customization from '../Customization';
import { useNavigate } from "react-router-dom";

const Product = () => {

  let params = useParams()
  let id = parseInt(params.id)

  const _CreateOwn =() => {
    let navigate = useNavigate();
    return(
      <div className='product-container col-lg-10'>
        <div className='product-header'>
          <div className='header-title'>
            <p className='title'>CREAT YOUR OWN</p>
          </div>
          <img src={MeatPizza} alt="#" className='header-img' />
        </div>
        <div className='product-content'>
          <div className='product-box'>
            {
              ProductData.Own.map(meat => {
                return (
                  <div className='individual-pizza'>
                    <div className='pizza-img'><img src={meat.src.src} className="img" alt='meat.src.alt' /></div> 
                    <div className='pizza-content'>
                      <div className='title'>{meat.title}</div>
                      <div className='content-desc'>{meat.desc}</div>
                      <div className='content-footer'>
                        <div className='cals'>Staring from $ {meat.price}</div>
                        <Button_1 
                            value={meat.button_value}
                            onClick={() => navigate("/customize")}/>
                      </div>
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

  const _MeatProduct = () => {
    let navigate = useNavigate();
    return(
      <div className='product-container col-lg-10'>
        <div className='product-header'>
          <div className='header-title'>
            <p className='title'>MEAT FAVORITES</p>
          </div>
          <img src={MeatPizza} alt="#" className='header-img' />
        </div>
        <div className='product-content'>
          <div className='product-box'>
            {
              ProductData.MeatProduct.map(meat => {
                return (
                  <div className='individual-pizza'>
                    <div className='pizza-img'><img src={meat.src.src} className="img" alt='meat.src.alt' /></div> 
                    <div className='pizza-content'>
                      <div className='title'>{meat.title}</div>
                      <div className='content-desc'>{meat.desc}</div>
                      <div className='content-footer'>
                        <div className='cals'>Staring from $ {meat.price}</div>
                        <Button_1 
                            value={meat.button_value}
                            onClick={() => navigate("/customize")}
                            />
                      </div>
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

  const _ViggieProduct = () => {
    let navigate = useNavigate();
    return(
      <div className='product-container col-lg-10'>
        <div className='product-header'>
          <div className='header-title'>
            <p className='title'>VEGGIE FAVORITES</p>
          </div>
          <img src={MeatPizza} alt="#" className='header-img' />
        </div>
        <div className='product-content'>
          <div className='product-box'>
            {
              ProductData.VeggieProduct.map(meat => {
                return (
                  <div className='individual-pizza'>
                    <div className='pizza-img'><img src={meat.src.src} className="img" alt='meat.src.alt' /></div> 
                    <div className='pizza-content'>
                      <div className='title'>{meat.title}</div>
                      <div className='content-desc'>{meat.desc}</div>
                      <div className='content-footer'>
                        <div className='cals'>Staring from $ {meat.price}</div>
                        <Button_1 
                            value={meat.button_value}
                            onClick={() => navigate("/customize")}
                            />
                      </div>
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

  const _GourmetThins = () => {
    let navigate = useNavigate();
    return(
      <div className='product-container col-lg-10'>
        <div className='product-header'>
          <div className='header-title'>
            <p className='title'>CREAT YOUR OWN</p>
          </div>
          <img src={MeatPizza} alt="#" className='header-img' />
        </div>
        <div className='product-content'>
          <div className='product-box'>
            {
              ProductData.MeatProduct.map(meat => {
                return (
                  <div className='individual-pizza'>
                    <div className='pizza-img'><img src={meat.src.src} className="img" alt='meat.src.alt' /></div> 
                    <div className='pizza-content'>
                      <div className='title'>{meat.title}</div>
                      <div className='content-desc'>{meat.desc}</div>
                      <div className='content-footer'>
                        <div className='cals'>Staring from $ {meat.price}</div>
                        <Button_1 
                            value={meat.button_value}
                            onClick={() => navigate("/customize")}
                            />
                      </div>
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

  const _AlternativeCrust = () => {
    let navigate = useNavigate();
    return(
      <div className='product-container col-lg-10'>
        <div className='product-header'>
          <div className='header-title'>
            <p className='title'>CREAT YOUR OWN</p>
          </div>
          <img src={MeatPizza} alt="#" className='header-img' />
        </div>
        <div className='product-content'>
          <div className='product-box'>
            {
              ProductData.MeatProduct.map(meat => {
                return (
                  <div className='individual-pizza'>
                    <div className='pizza-img'><img src={meat.src.src} className="img" alt='meat.src.alt' /></div> 
                    <div className='pizza-content'>
                      <div className='title'>{meat.title}</div>
                      <div className='content-desc'>{meat.desc}</div>
                      <div className='content-footer'>
                        <div className='cals'>Staring from $ {meat.price}</div>
                        <Button_1 
                            value={meat.button_value}
                            onClick={() => navigate("/customize")}
                            />
                      </div>
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

  const _SPECIALS = () => {
    let navigate = useNavigate();
    return(
      <div className='product-container col-lg-10'>
        <div className='product-header'>
          <div className='header-title'>
            <p className='title'>CREAT YOUR OWN</p>
          </div>
          <img src={MeatPizza} alt="#" className='header-img' />
        </div>
        <div className='product-content'>
          <div className='product-box'>
            {
              ProductData.MeatProduct.map(meat => {
                return (
                  <div className='individual-pizza'>
                    <div className='pizza-img'><img src={meat.src.src} className="img" alt='meat.src.alt' /></div> 
                    <div className='pizza-content'>
                      <div className='title'>{meat.title}</div>
                      <div className='content-desc'>{meat.desc}</div>
                      <div className='content-footer'>
                        <div className='cals'>Staring from $ {meat.price}</div>
                        <Button_1 
                            value={meat.button_value}
                            onClick={() => navigate("/customize")}
                            />
                      </div>
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

  const _SALAD = () => {
    let navigate = useNavigate();
    return(
      <div className='product-container col-lg-10'>
        <div className='product-header'>
          <div className='header-title'>
            <p className='title'>CREAT YOUR OWN</p>
          </div>
          <img src={MeatPizza} alt="#" className='header-img' />
        </div>
        <div className='product-content'>
          <div className='product-box'>
            {
              ProductData.MeatProduct.map(meat => {
                return (
                  <div className='individual-pizza'>
                    <div className='pizza-img'><img src={meat.src.src} className="img" alt='meat.src.alt' /></div> 
                    <div className='pizza-content'>
                      <div className='title'>{meat.title}</div>
                      <div className='content-desc'>{meat.desc}</div>
                      <div className='content-footer'>
                        <div className='cals'>Staring from $ {meat.price}</div>
                        <Button_1 
                            value={meat.button_value}
                            onClick={() => navigate("/customize")}
                            />
                      </div>
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

  const _PICKUPSPECIALS = () => {
    let navigate = useNavigate();
    return(
      <div className='product-container col-lg-10'>
        <div className='product-header'>
          <div className='header-title'>
            <p className='title'>CREAT YOUR OWN</p>
          </div>
          <img src={MeatPizza} alt="#" className='header-img' />
        </div>
        <div className='product-content'>
          <div className='product-box'>
            {
              ProductData.MeatProduct.map(meat => {
                return (
                  <div className='individual-pizza'>
                    <div className='pizza-img'><img src={meat.src.src} className="img" alt='meat.src.alt' /></div> 
                    <div className='pizza-content'>
                      <div className='title'>{meat.title}</div>
                      <div className='content-desc'>{meat.desc}</div>
                      <div className='content-footer'>
                        <div className='cals'>Staring from $ {meat.price}</div>
                        <Button_1 
                            value={meat.button_value}
                            onClick={() => navigate("/customize")}
                            />
                      </div>
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

  // const _CHICKEN = () => {
  //   let navigate = useNavigate();
  //   return(
  //     <div className='product-container col-lg-10'>
  //       <div className='product-header'>
  //         <div className='header-title'>
  //           <p className='title'>CREAT YOUR OWN</p>
  //         </div>
  //         <img src={MeatPizza} alt="#" className='header-img' />
  //       </div>
  //       <div className='product-content'>
  //         <div className='product-box'>
  //           {
  //             ProductData.MeatProduct.map(meat => {
  //               return (
  //                 <div className='individual-pizza'>
  //                   <div className='pizza-img'><img src={meat.src.src} className="img" alt='meat.src.alt' /></div> 
  //                   <div className='pizza-content'>
  //                     <div className='title'>{meat.title}</div>
  //                     <div className='content-desc'>{meat.desc}</div>
  //                     <div className='content-footer'>
  //                       <div className='cals'>Staring from $ {meat.price}</div>
  //                       <Button_1 
  //                           value={meat.button_value}
  //                           onClick={() => navigate("/customize")}
  //                           />
  //                     </div>
  //                   </div>
  //                 </div>
  //               )
  //             })
  //           }
  //         </div>
  //       </div>
  //     </div>
  //   )
    
  // }
  

  return (
    <div>
      {
        id === 1 && <div>{_CreateOwn()}</div>
      }
      {
        id === 2 && <div>{_MeatProduct()}</div>
      }
      {
        id === 3 && <div>{_ViggieProduct()}</div>
      }
      {
        id === 4 && <div>{_GourmetThins()}</div>
      }
      {
        id === 5 && <div>{_AlternativeCrust()}</div>
      }
      {
        id === 6 && <div>{_SPECIALS()}</div>
      }
      {
        id === 7 && <div>{_SALAD()}</div>
      }
      {
        id === 8 && <div>{_PICKUPSPECIALS()}</div>
      }
    </div>
  )
}

export default Product;