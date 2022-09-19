import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '../../../components/Button/button1';
import './style.scss'
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { modalToCart } from "../../../redux/actions";

const CustomizeModal =(props) => {
  const modalData = props.data;
  const [modalCount, setModalCount] = useState(1)

  const modalCart = useSelector(state => state.items);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const addToCart = () => {
    const newModal = {
      name: modalData.name,
      extra: inputRef.current.value,
      quantity: modalData.count,
      price: (modalData.price.price).toFixed(2)
    }
    dispatch(modalToCart(newModal))
    
  }
  useEffect(() => {setModalCount(1)}, [modalData, props.onHide])
  const minus = () => {
    if(modalData.count >= 2) {
      modalData.count = modalData.count - 1;
    }
    setModalCount(modalData.count)
  }

  const plus = () => {
    modalData.count = modalData.count + 1;
    setModalCount(modalData.count)
  }
 
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{modalData.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='special-input'>
          <div className='special-title'>Special Instructions</div>
          <input type="text" className="form-control" placeholder="Example: No Pepper / Sauce / Salt please " ref={inputRef} />
        </div>
        <div className="quantity-price">
          <div className='quantity-title'>Quantity</div>
          <div className='quantity-group'>
            <div className='quantity'>
              <button onClick={minus} > <AiFillMinusCircle /> </button>
              <span className="quantity-detail">{modalCount}</span>
              <button onClick={plus} > <AiFillPlusCircle /> </button>
            </div>
            <div className='price'>{(props.price*modalCount).toFixed(2)}</div>
          </div>
          
      </div>
      </Modal.Body>
      <Modal.Footer>
        <div className='add-btn'>
          <Button value={modalCart.filter(v => v.name === modalData.name).length > 0 ? "ADDED" : "ADD TO CART"}
                  onClick={() => {props.onHide(); addToCart()}}
                  status={modalCart.filter(v => v.name === modalData.name).length > 0 ? true : false} />
        </div>
        <div className='cancel-btn'><Button value="Cancel" onClick={props.onHide}>Close</Button></div>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomizeModal;
