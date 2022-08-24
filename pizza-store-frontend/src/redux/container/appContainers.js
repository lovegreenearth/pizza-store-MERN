import { connect } from 'react-redux'
import Customization from '../../pages/Customization'
import { addToCart, CheckOut } from "../actions/index";
import { useDispatch, useSelector } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    addPizza: state
  }
};

// const {name} = useParams();

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (params) => dispatch(addToCart(params)),
    // CheckOut: (params) => dispatch(CheckOut(params)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customization)