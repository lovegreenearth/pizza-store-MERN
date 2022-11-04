import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '../../../components/Button/button1';
import './style.scss'
import { BiCheck } from "react-icons/bi";

const FreeDipModal = (props) => {

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Select Free Dip</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='dip-content'>
          {
            props.content.map((item, index) => {
              return (
                
                <div className='individual-checkbox' onClick={() => props.onSelect(item, index)} key={item.name}>
                  <div className={'checkbox-symbol' + (props.check[index] ? ' checked' : '')}>
                  {
                    props.check && <BiCheck className="check"/>
                  }
                  </div>
                  <div className='checkbox-label'>{item.name}</div>
                </div>
              )
            })
          }
        </div>
        
      </Modal.Body>
      <Modal.Footer>
        <div></div>
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

export default FreeDipModal;
