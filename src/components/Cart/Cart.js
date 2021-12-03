import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { removeFromCart, getAllCart } from '../../store/cart';
import './Cart.css';

function Cart() {
  const produce = useSelector(state => state.produce);
  const dispatch = useDispatch();
  const cartArr = useSelector(getAllCart);

  const cartItems = cartArr && cartArr
    .map(item => {
      return {
        ...item,
        ...produce[item.id]
      };
    });

  if (!cartItems || !cartItems.length) return (
    <div className="cart">
      No items in the cart. Start selecting items to purchase.
    </div>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    window.alert(
      "Purchased the following:\n" +
      `${cartItems.map(item => `${item.count} of ${item.name}`).join('\n')}`
    );
    cartItems.forEach((item) => {
      dispatch(removeFromCart(item.id))
    })
  }

  return (
    <div className="cart">
      <ul>
        {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
      </ul>
      <hr />
      <form onSubmit={onSubmit}>
        <button type="submit">Purchase</button>
      </form>
    </div>
  )
}

export default Cart;
