import React, { useContext, useEffect } from 'react'
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle'
import { CustomContext } from '../../utils/Context'
import CatalogRow from './CatalogRow/CatalogRow'
import SideBar from './SideBar/SideBar'

const Catalog = () => {
      const {category, getProducts} = useContext(CustomContext)

  useEffect(()=> {
    getProducts()
  }, [category])
  return (
    <section className='catalog'>
      <div className="container">
        <CategoryTitle/>
        <div className="catalog__content">
          <div className="catalog__left">
            <SideBar/>
          </div>
          <div className="catalog__right">
            <CatalogRow/>
          </div>
        </div>
        
        
      </div>
    </section>
  )
}

export default Catalog