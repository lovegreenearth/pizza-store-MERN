import React, { Component } from 'react';
import { AiOutlineUp } from "react-icons/ai"
import { AiOutlineDown } from "react-icons/ai"
import { BsFillCartFill } from "react-icons/bs"
import "./cart.scss"
import Button from "../../components/Button/button1"
import { connect } from 'react-redux';

import Static from "../../assets/img/cart-small.png"

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
            <div className='empty'>
              <BsFillCartFill style={{fontSize: "25px", color: "grey"}}/>
              <div className='cart-status'>Empty Cart</div>
            </div>
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
              <div className='cart-title'>Your Cart</div>
              {
                this.props.items.length === 0
                ? <BsFillCartFill className='empty-cart' />
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
              <Button value ={"Check  Out"} />
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

