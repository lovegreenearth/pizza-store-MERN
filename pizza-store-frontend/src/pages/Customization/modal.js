import React from "react"
import "./modal.css"
import { AiFillCaretRight } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";
import { BsTelephoneMinus } from "react-icons/bs";

const Modal = (props) => {
  if(!props.show) {
    return null
  }
  // let navigate = useNavigate();
  return (
    <div  className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Modal Title</h4>
        </div>
        <div className="modal-body">
          {/* <button onClick={() => navigate("Product/1")}>This is modal content <AiFillCaretRight /></button> */}
          <Navigate to="/Product/1">This is modal content <AiFillCaretRight /></Navigate>
        </div>
        <div className="modal-footer">
          <button className="button" onClick={props.onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;