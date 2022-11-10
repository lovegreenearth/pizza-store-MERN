import { React, useState } from "react"
import { useSelector } from 'react-redux';
import "./cart.scss"
import Button from "../../components/Button/button1"
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeToProduct } from "../../redux/actions";
import { BsDashCircle } from "react-icons/bs"
import { AiFillEdit } from "react-icons/ai"

import Static from "../../assets/img/cart-small.png"
import Basket from "../../assets/img/Vector.png";
import EmptyCart from "../../assets/img/emptyCart.png"
import ArrowDown from "../../assets/img/arrowDown.png"
import ArrowUp from "../../assets/img/arrowUp.png"
import ConditionModal from "./ConditionModal";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const [onShow, setOnShow] = useState(false)
  const items = useSelector((state) => state.items);
  
  let navigate = useNavigate();

  const handleUpCart = () => {
    setActiveCart(activeCart => !activeCart);
  }

  const priceTotal = items.reduce((accumulator, value) => {
    return accumulator + value.price * value.quantity;
  }, 0)
  
  const dispatch = useDispatch();

  const remove = (c,index) => {
    const removeProduct = {
      index: index,
      name: c.name
    }
    dispatch(removeToProduct(removeProduct))
  }

  const edit = (index) => {
    console.log("edit")
  }

  const checkOut =() => {
    navigate("/CheckOut")
  }

  const change = () => {
    navigate("/signIn");
    setOnShow(false);
  }

  return (
    <div className='cart'>
      <div className='cart-header'>
        <div className='small'>
          {
            items.length > 0 
            ? <div className='fill'>
                <img src={Basket} alt="basket" />
                <div className='fill-status'>{items.length + " items"}</div>
              </div>
            : <div className='empty'>
                <img src={Basket} alt="basket" />
                <div className='empty-status'>Empty Cart</div>
              </div>
          }
          
          <div className="price-toggle">
            {
              items.length > 0 
              ? <div className="priceTotal">{"$"+ (priceTotal).toFixed(2)}</div>
              : ''
            }
            
            <div onClick={() => handleUpCart()}>
              {
                activeCart ? <img src={ArrowDown} alt="Down" /> : <img src={ArrowUp} alt="Up" />
              }
            </div>
          </div>
        </div>
      </div>
      {
        activeCart
        ?
          <div className='cart-content'>
            {
              items.length === 0
              ? 
                <div className="empty-cart">
                  <div className="comment">Please Add to Cart</div>
                  <img className='cart-img' src={EmptyCart} alt="basket" />
                  <Button value ={"Check Out"} onClick={checkOut} status={true} />
                </div>
              : <div className='cart-detail scrollbar scrollbar--light'>
                  {
                    items.map((c, index) => {
                      return (
                        <div className='cart-individual' key={index}>
                          <div className='image'><img src={Static} alt="cart-small" /></div>
                          <div className='content'>
                            <div className='title'>{c.name}</div>
                            {
                              c.extra ? <div className='desc'>{c.extra}</div>
                              : <div className="combo-part">
                                {
                                   Object.entries(c).map(([key, val]) => 
                                   key === 'name' || key === 'extra' || key === 'price' || key === 'quantity' ||
                                   key === 'size' || key === 'status' 
                                   ? ''
                                   : <div className="combo-content" key={key}>
                                      <span className="key">{key + ": "}</span>
                                      <span className="value">{val}</span>
                                   </div>
                                 )
                                }
                              </div>
                            }
                            
                            <div className='final'>
                              <div className='remove-edit'>
                                <div className='remove' onClick={() =>remove(c, index)}>
                                 <BsDashCircle style={{fontSize: "12px"}} /> Remove
                                </div>
                                <div className='edit' onClick={() => edit(index)}>
                                  <AiFillEdit /> Edit
                                </div>
                              </div>
                              <div className='final-price'>
                                {"$ " + (c.price * c.quantity).toFixed(2)}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
            }
            <Button value ={"Check Out"} onClick={checkOut} />
          </div>
        : ""
      }
      <ConditionModal show={onShow} onHide={() => setOnShow(false)} change={() => change()} />
    </div>
  )
  
}

const mapStateToProps = state => {
  return {
    items: state.items,
  }
}

const mapStateToDispatch = dispatch => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Cart);

