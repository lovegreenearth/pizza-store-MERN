import React, { Component } from 'react';
import { AiOutlineUp } from "react-icons/ai"
import { AiOutlineDown } from "react-icons/ai"
import "./cart.scss"
import Button from "../../components/Button/button1"
import { connect } from 'react-redux';

import Static from "../../assets/img/cart-small.png"
import Basket from "../../assets/img/Vector.png";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCart: false
    }
  }

  render() {
    const handleUpCart = () => {
      this.setState(prevState => ({
        activeCart: !prevState.activeCart
      }));
    }
    const priceTotal = this.props.items.reduce((accumulator, value) => {
      
      return accumulator + value.price * value.quantity;
    }, 0)
    console.log("priceTotal ----> ", priceTotal)
    const remove = () => {
      console.log("remove")
    }
    const edit = () => {
      console.log("edit")
    }

    return (
      <div className='cart'>
        <div className='cart-header'>
          <div className='small'>
            {
              this.props.items.length > 0 
              ? <div className='fill'>
                  <img src={Basket} alt="basket" />
                  <div className='fill-status'>{this.props.items.length + " items"}</div>
                </div>
              : <div className='empty'>
                  <img src={Basket} alt="basket" />
                  <div className='empty-status'>Empty Cart</div>
                </div>
            }
            
            <button className='toggle-button' onClick={() => handleUpCart()}>
              {
                this.state.activeCart ? <AiOutlineDown /> : <AiOutlineUp />
              }
            </button>
          </div>
        </div>
        {
          this.state.activeCart
          ?
            <div className='cart-content'>
              {
                this.props.items.length === 0
                ? <img className='empty-cart' src={Basket} alt="basket" />
                : <div className='cart-detail'> 
                    {
                      this.props.items.map((c, index) => {
                        return (
                          <div className='cart-individual' key={index}>
                            <div className='image'><img src={Static} alt="cart-small" /></div>
                            <div className='content'>
                              <div className='title'>{c.name}</div>
                              <div className='desc'>This is the most delicious chicken wings in this world</div>
                              <div className='final'>
                                <div className='remove-edit'>
                                  <div className='remove' onClick={remove}>remove</div>
                                  <div className='edit' onClick={edit}>edit</div>
                                </div>
                                <div className='final-price'>
                                  {"$ " + c.price * c.quantity}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
              }              
              <Button Color="#FCA017" value ={"Check  Out"} />
            </div>
          : ""
        }
      </div>
    )
  }
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

