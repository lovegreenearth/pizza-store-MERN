import { connect } from 'react-redux'
import Customization from '../../pages/Customization'
import ChickenWings from '../../pages/ChickenWing';
import { addToCart } from "../actions/index";
import { addToChicken } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    addPizza: state,
    newChicken:state,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (params) => dispatch(addToCart(params)),
    addToChicken: (params) => dispatch(addToChicken(params)),
    dispatch 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customization);
export const Wings = connect(mapStateToProps, mapDispatchToProps)(ChickenWings);