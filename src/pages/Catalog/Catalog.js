import React, { useContext, useEffect } from 'react'
import CategoryTitle from '../../Components/CategoryTitle'
import { CustomContext } from '../../utils/context'
import CatalogRow from './CatalogRow/CatalogRow'
import SideBar from './SideBar/SideBar'
import {FloatingWhatsApp} from 'react-floating-whatsapp';

const Catalog = () => {
    const { category, getProducts } = useContext(CustomContext)

    useEffect(() => {
        getProducts()
    }, [category])
    return (
        <selection>
            <div className="container">
                <FloatingWhatsApp />
                <CategoryTitle />
                <p className='catalog-line'>

                </p>
                <div className="catalog__content">
                    <div className="catalog__left">
                        <SideBar />
                    </div>
                    <div className="catalog__right">
                        <CatalogRow />
                    </div>
                </div>
            </div>
        </selection>
    )
}

export default Catalog

