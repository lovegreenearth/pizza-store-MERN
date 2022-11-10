import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '../../../components/Button/button1';
import './style.scss'
import { BiCheck } from "react-icons/bi";

const ExtraDipModal = (props) => {

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Select Extra Dip</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='dip-content'>
          {
            props.content.map((item, index) => {
              return (
                
                <div className='individual-checkbox' onClick={() =>{ props.onSelect(index);}} key={item.name}>
                  <div className={'checkbox-symbol' + (props.check[index] ? ' checked' : '')}>
                  {
                    props.check && <BiCheck className="check"/>
                  }
                  </div>
                  <div className='checkbox-content'>
                    <div className={'checkbox-label' + (props.check[index] ? ' checked-label' : '')}>{item.name}</div>
                    <div className={'checkbox-price' + (props.check[index] ? ' checked-label' : '')}>{item.price}</div>
                  </div>
                  
                </div>
              )
            })
          }
        </div>
        
      </Modal.Body>
      <Modal.Footer id="footer-part">
        <div className='combo-price'>{"$ " + (props.price || 0).toFixed(2)}</div>
          <div className='NextButton'>
            <Button 
              value="Next"
              onClick={() => props.onHide()}
            />
          </div>
      </Modal.Footer>
    </Modal>
  );
}

export default ExtraDipModal;
