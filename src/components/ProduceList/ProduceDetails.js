import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart';
import { likeProduce } from '../../store/produce';

function ProduceDetails({ produce, setShowCart }) {
  const cartItem = {};
  const dispatch = useDispatch();

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={()=> {
            dispatch(likeProduce(produce.id));
          }}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={() => {
            dispatch(addToCart(produce.id))
            setShowCart(true)
          }}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
