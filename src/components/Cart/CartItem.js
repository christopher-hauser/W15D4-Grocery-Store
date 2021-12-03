import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateCart } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
    if (item.count === 0) dispatch(removeFromCart(item.id));
  }, [item.count, dispatch, item.id]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={(e)=> {
            dispatch(updateCart(item.id, parseInt(e.target.value)))
          }}
        />
        <button
          className="cart-item-button"
          onClick={()=> {
            dispatch(updateCart(item.id, item.count + 1))
          }}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={()=> {
            dispatch(updateCart(item.id, item.count - 1))
          }}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
