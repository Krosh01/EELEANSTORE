import React, { useContext } from 'react'
import { CustomContext } from '../../utils/Context'

const CategoryTitle = () => {
    const {category} = useContext(CustomContext)
  return (
    <h2 className='categorytitle'>
        {category === 'novelties' && 'Новинки'}
        {category === 'skirt' && 'Юбки'}
        {category === 'tuxedo' && 'Смокинг'}
        {category === 'suits' && 'Костюмы'}
        {category === 'accessories' && 'Аксессуары'}
        {category === 'trousers' && 'Брюки'}
        {category === 'blouses' && 'Блузки'}
        {category === 'dresses' && 'Платья'}
        {category === 'tops and vests' && 'Топы и Жилеты'}
        {category === 'Autumn-winter 20-21' && 'Осень-зима 20-21'}
        {category === 'Evening sets' && 'Вечерние комплекты'}
        {category === 'Pre-order' && 'Предзаказ'}
        {category === 'Wedding and graduation' && 'Свадьба и выпускной'}

    </h2>
  )
}

export default CategoryTitle