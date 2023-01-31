import { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'
import store from '../../redux'
import { CustomContext } from '../../utils/context'
import BasketItem from './basketAssets/basketItem'

const Basket = () => {

    const { basket, setBasket } = useContext(CustomContext)
    const task = useSelector((store) => store.task.task)
    const totalPrice = useSelector((store) => store.task.task.reduce((acc, item) => acc + item.price, 0))

  return (
    <>
    <div style={{opacity:`${basket ? '1' : '0'}`,display:`${basket ? 'block' : 'none'}`}} className='basket'></div>
    <div style={{top:`${basket ? '0' : '-1200px'}`}} className='basket__content'>
            <div className='basket__content-top'>
                <div className='basket__content-basket'>Корзина</div>
                <div className='basket__content-line'></div>
                <div className='basket__content-x' onClick={() => setBasket(!basket)}></div>
            </div>
            {task.length !== 0 ?
                task.map((item) => (
                    <BasketItem item={item} />
                ))
                : <div className='basket__content-empty'>Корзина пуста</div>
            }
            {task.length !== 0 && <div className='basket__content-bottom'>
              <div>Итого:</div>
              <div>
                {
                  <div>{totalPrice}</div>
                }
              </div>
            </div>}
            {task.length !== 0 && <Link className='basket__content-oform'>ОФОРМИТЬ ЗАКАЗ</Link>}
            {task.length !== 0 && <Link className='basket__content-oform-two'>ЗАКАЗАТЬ В ОДИН КЛИК</Link>}
            
    </div>
    </>
  )
}

export default Basket
