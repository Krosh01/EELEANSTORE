import React, { useContext } from 'react'
import { CustomContext } from '../../../utils/Context'

const CatalogRow = () => {
    const {products} = useContext(CustomContext)
  return (
    <div className='catalog_row'>
        {
           products.data.map((item)=>(
            <div className='catalog__card'>
                <img className='catalog__card-img' src={`../${item.img}`} alt={item.title} />
                <h3 className='catalog__card-title'>{item.title}</h3>
                <img className='catalog__card-image' src={`../${item.image}`} alt={item.image} />
                <p className='catalog__card-price'>{item.price}</p>
                <p className='catalog__card-text'>{item.text}</p>
            </div>
           )) 
        }
    </div>
  )
}

export default CatalogRow