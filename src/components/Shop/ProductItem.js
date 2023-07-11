import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch} from 'react-redux'
import { Cartaction } from '../../Store/Cart-slice';
const ProductItem = (props) => {
  const { title, price, description,id } = props;
  const dispatch=useDispatch()

  const AdditemHandler=()=>{
    dispatch(Cartaction.AdditemToCart({title,price,description,id,quantity:1}))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={AdditemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
