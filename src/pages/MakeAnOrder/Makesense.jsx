import React from 'react'
import { useSelector } from 'react-redux'
import store from '../../redux'
import MakeAnOrder from './MakeAnOrder'

const Makesense = () => {
    const makeOrder = useSelector((store) => store.makeOrder.makeOrder)
  return (
    <>
     {makeOrder.map((products => <MakeAnOrder products={products} key={products.id}/>))} 
    </>
  )
}

export default Makesense