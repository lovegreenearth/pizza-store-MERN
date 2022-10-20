import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '../../../components/Button/button1';
import './style.scss'

const ConditionModal = (props) => {

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Error!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>You can check out your products after signing in.</div>
        <div>Do you mind to sign in website?</div>
      </Modal.Body>
      <Modal.Footer>
        <div className='YeahButton'><Button value="Yeah!" onClick={props.change}/></div>
        <div className='CancelButton'><Button value="Cancel" onClick={props.onHide}>Close</Button></div>
      </Modal.Footer>
    </Modal>
  );
}

export default ConditionModal;
