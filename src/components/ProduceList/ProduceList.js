import { useSelector } from 'react-redux';
import ProduceDetails from './ProduceDetails';
import { getAllProduce } from '../../store/produce';
import './ProduceList.css';

function ProduceList({ setShowCart }) {
  // const produce = useSelector(state => state.produce);

  // const produceArr = Object.values(produce);

  const produceArr = useSelector(getAllProduce);

  return (
    <>
      <h2>All produce</h2>
      {!produceArr.length && <span>No produce available right now.</span>}
      <ul className="produce-list">
        {produceArr.map((produce) => (
          <ProduceDetails key={produce.id} produce={produce} setShowCart={setShowCart} />
        ))}
      </ul>
    </>
  );
}

export default ProduceList;
