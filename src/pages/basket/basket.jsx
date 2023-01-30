import { useContext } from 'react'
import { useSelector } from 'react-redux'
import store from '../../redux'
import { CustomContext } from '../../utils/context'
import BasketItem from './basketAssets/basketItem'

const Basket = () => {

    const { basket, setBasket } = useContext(CustomContext)
    const task = useSelector((store) => store.task.task)
    const taskCount = useSelector((store) => store.task.taskCount)


  return (
    <>
    <div style={{opacity:`${basket ? '1' : '0'}`,display:`${basket ? 'block' : 'none'}`}} className='basket'></div>
    <div style={{top:`${basket ? '0' : '-1200px'}`}} className='basket__content'>
            <div className='basket__content-top'>
                <div className='basket__content-basket'>{taskCount} Корзина</div>
                <div className='basket__content-line'></div>
                <div className='basket__content-x' onClick={() => setBasket(!basket)}></div>
            </div>
            {
                task.map((item) => (
                    <BasketItem item={item}/>
                ))
            }
            
    </div>
    </>
    
  )
}

export default Basket