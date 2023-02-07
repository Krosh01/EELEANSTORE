import React from 'react'
import SideBaritem from '../SideBarItem/SideBarItem'

const SideBar = () => {
    return (
        <aside>
            <div className="sideBar__lang">
                <h3 className='sideBar__lang-h3'>КАТЕГОРИИ</h3>
            </div>
            <ul className='sideBar_menu'>
                <SideBaritem value={'novelties'} text='Новинки' />
                <SideBaritem value={'skirt'} text='Юбки' />
                <SideBaritem value={'tuxedo'} text='Смокинг' />
                <SideBaritem value={'suits'} text='Костюмы' />
                <SideBaritem value={'accessories'} text='Аксессуары' />
                <SideBaritem value={'trousers'} text='Брюки' />
                <SideBaritem value={'blouses'} text='Блузки' />
                <SideBaritem value={'dresses'} text='Платья' />
                <SideBaritem value={'tops and vests'} text='Топы и Жилеты' />
            </ul>
            <div className="sidebar__lang">
                <h3 className='sideBar__lang-h3'>КОЛЕКЦИИ</h3>
            </div>
            <ul className='sideBar_menu'>
                <SideBaritem value={'Autumn-winter 20-21'} text='Осень-зима 20-21' />
                <SideBaritem value={'Evening sets'} text='Вечерние комплекты' />
                <SideBaritem value={'Pre-order'} text='Предзаказ' />
                <SideBaritem value={'Wedding and graduation'} text='Свадьба и выпускной' />
            </ul>
        </aside>
    )
}

export default SideBar