import classes from './CartButton.module.css';
import {useDispatch,useSelector} from 'react-redux'
import { UiAction } from '../../Store/Ui-slice';


const CartButton = (props) => {
  const cartdata=useSelector(state=>state.cart)
  const dispatch=useDispatch()

 const ToggleHandler=()=>{
  dispatch(UiAction.toggle())

 }

  return (
    <button className={classes.button} onClick={ToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartdata.totalquantity}</span>
    </button>
  );
};

export default CartButton;
