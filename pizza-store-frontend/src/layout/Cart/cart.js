import React, { Component } from 'react';
import { AiOutlineUp } from "react-icons/ai"
import { AiOutlineDown } from "react-icons/ai"
import { BsFillCartFill } from "react-icons/bs"
import "./cart.scss"
import Button_1 from "../../components/Button/button1"
import { connect } from 'react-redux';

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
    return (
    <div className='cart'>
      <div className='cart-header'>
        <div className='empty'>
          
          <BsFillCartFill style={{fontSize: "25px", color: "grey"}}/>
          <div className='cart-status'>Empty Cart</div>
        </div>
        {/* <button onClick={() => this.props.dispatch({type: 'CLEAR_CART'})}>Clear</button> */}
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
            {
              this.props.items.map(c => {
                return (
                  <div key={c.name}>
                    {c.name}
                    {c.desc}
                    {c.price}
                    {c.quantity}
                  </div>
                )
              })
              
            }
            <BsFillCartFill className='empty-cart' />
            <Button_1 value ={"CheckOut"} />
          </div>
        : ""
      }
    </div>)
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const mapStateToDispatch = dispatch => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Cart);
