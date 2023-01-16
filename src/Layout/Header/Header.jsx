

import React from 'react'
import burger from '../../assets/Header/burger.svg'
import instagram from '../../assets/Header/instagram.svg'
import vk from '../../assets/Header/vk.svg'
import facebook from '../../assets/Header/f.svg'
import logo from '../../assets/Header/elenlogo.svg'
import heart from '../../assets/Header/heartzero.svg'
import portfel from '../../assets/Header/portfelzero.svg'

const Header = () => {
  return (
        <header className='Header'>
            <div className='container'>
                <div className='Header_inner'>
                    <div className='Header_Top'>
                        <div className='Header_start'>
                            <img src={burger} alt="/" />
                            <div className='Header_socseti'  >
                                <img  className='Header_icons' src={instagram} alt="/" />
                                <img  className='Header_icons' src={vk} alt="/" />
                                <img  className='Header_icons' src={facebook} alt="/" />
                            </div>
                        </div>
                        <div className='Header_Mid'>
                            <img src={logo} alt="/" />
                            <div className='Header_Mid_text'>
                            ЖЕНСКИЙ СМОКИНГ
                            </div>
                        </div>
                        <div className='Header_End'>
                            <p>+7 (495) 150 - 14 - 77</p>
                            <img className='Headericons_end' src={heart} alt="/" />
                            <img className='Headericons_end' src={portfel} alt="/" />
                        </div>
                    </div>
                    <div className='Header_Down'>
                        <div className='Header_Nav'>
                            <ul className='Header_Ul_Nav'>
                                <li>НОВИНИКИ</li>
                                <li>КАТЕГОРИИ</li>
                                <li>НАШИ КОЛЛЕКЦИИ</li>
                                <li>ПОКУПАТЕЛЯМ</li>
                                <li>О БРЕНДЕ</li>
                                <li>ШОУРУМ</li>
                                <li>КОНТАКТЫ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Header