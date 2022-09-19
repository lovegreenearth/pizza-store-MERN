import { connect } from 'react-redux'
import Customization from '../../pages/Customization'
import ChickenWings from '../../pages/ChickenWing';
import CustomizeModal from '../../pages/Product/Modal';
import { addToCart } from "../actions/index";
import { addToChicken } from '../actions/index';
import { removeToProduct } from '../actions/index';
import { modalToCart } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    addPizza: state,
    newChicken:state,
    removeProduct: state,
    newModal: state,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (params) => dispatch(addToCart(params)),
    addToChicken: (params) => dispatch(addToChicken(params)),
    removeToProduct: (params) => dispatch(removeToProduct(params)),
    modalToCart: (params) => dispatch(modalToCart(params)),
    dispatch 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customization);
export const Wings = connect(mapStateToProps, mapDispatchToProps)(ChickenWings);
export const Modal = connect(mapStateToProps, mapDispatchToProps)(CustomizeModal);