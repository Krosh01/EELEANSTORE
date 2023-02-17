import React from 'react';
import { useSelector } from 'react-redux';
import MakeAnOrder from './MakeAnOrder';

const Makesense = () => {
  const makeOrder = useSelector((store) => store.makeOrder.makeOrder);

  if (makeOrder.length === 0) {
    return null;
  }

  const product = makeOrder[makeOrder.length - 1];

  return <MakeAnOrder products={product} />;
};

export default Makesense;
