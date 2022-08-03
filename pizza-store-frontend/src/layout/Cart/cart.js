import React, { Component } from 'react';
import { AiOutlineUp } from "react-icons/ai"
import { AiOutlineDown } from "react-icons/ai"
import { BsFillCartFill } from "react-icons/bs"
import "./cart.scss"
import Button_1 from "../../components/Button/button1"

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCart: false
    }
  }

  render() {
    const handleUpCart = () => {
      console.log(this.state.activeCart)
      this.setState(prevState => ({
        activeCart: !prevState.activeCart
      }));
    }
    return (
    <div className='cart'>
      <div className='cart-header'>
        <div className='empty'>
          <BsFillCartFill style={{fontSize: "25px", color: "#FCA017"}}/>
          <div className='cart-status'>Empty Cart</div>
        </div>
        <button className='toggle-button' onClick={() => handleUpCart()}>
          {
            this.state.activeCart ? <AiOutlineDown /> : <AiOutlineUp />
          }
        </button>
      </div>
      {
          this.state.activeCart
        ?
          <div className='cart-content'>
            <div className='cart-title'>Your Cart</div>
            <BsFillCartFill className='empty-cart' />
            <Button_1 value ={"CheckOut"} />
          </div>
        : ""
      }
    </div>)
  }
}

export default Cart;
