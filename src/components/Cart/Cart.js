import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartdata=useSelector(state=>state.cart)
  console.log(cartdata.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartdata.items.map(item=><CartItem
         key={item.id}
          item={{title:item.name,quantity:item.quantity, total:item.totalprice, price:item.price ,id:item.id}}
        />)}
      </ul>
    </Card>
  );
};

export default Cart;
