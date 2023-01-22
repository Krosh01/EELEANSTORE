import React  from 'react'
import { useState } from 'react'
import Anonymus from '../../../assets/Instagram/Anonymus.svg'
import insta1 from '../../../assets/Instagram/insta1.png'
import insta2 from '../../../assets/Instagram/insta2.png'
import insta3 from '../../../assets/Instagram/insta3.png'
import insta4 from '../../../assets/Instagram/insta4.png'
import insta5 from '../../../assets/Instagram/insta5.png'

const Instagram = () => {
  return (
    <section className='Instagram'>
        <div className="container">
            <div className="Instagram_inner">
                <h1>МЫ В ИНСТАГРАМ</h1>
                <div className="Instagram_inner_row">
                    <div className="Instagram_inner_row_card">
                        <img src={insta1} alt="" />
                        <div className="Instagram_inner_row_card_content">
                            <img src={Anonymus} alt="" />
                            <div className="Instagram_inner_row_card_content_text1">
                                <p>elen_ofificial / <a  href="">Подписаться</a> </p>
                                <p>Кофемания / Coffeemania</p>
                            </div>
                        </div>
                    </div>
                    <div className="Instagram_inner_row_card">
                        <img src={insta2} alt="" />
                        <div className="Instagram_inner_row_card_content">
                            <img src={Anonymus} alt="" />
                            <div className="Instagram_inner_row_card_content_text1">
                                <p>elen_ofificial / <a href="">Подписаться</a> </p>
                                <p>Кофемания / Coffeemania</p>
                            </div>
                        </div>
                    </div>
                    <div className="Instagram_inner_row_card">
                        <img src={insta3} alt="" />
                        <div className="Instagram_inner_row_card_content">
                            <img src={Anonymus} alt="" />
                            <div className="Instagram_inner_row_card_content_text1">
                                <p>elen_ofificial / <a href="">Подписаться</a> </p>
                                <p>Кофемания / Coffeemania</p>
                            </div>
                        </div>
                    </div>
                    <div className="Instagram_inner_row_card">
                        <img src={insta4} alt="" />
                        <div className="Instagram_inner_row_card_content">
                            <img src={Anonymus} alt="" />
                            <div className="Instagram_inner_row_card_content_text1">
                                <p>elen_ofificial / <a href="">Подписаться</a> </p>
                                <p>Кофемания / Coffeemania</p>
                            </div>
                        </div>
                    </div>
                    <div className="Instagram_inner_row_card">
                        <img src={insta5} alt="" />
                        <div className="Instagram_inner_row_card_content">
                            <img src={Anonymus} alt="" />
                            <div className="Instagram_inner_row_card_content_text1">
                                <p>elen_ofificial / <a href="">Подписаться</a> </p>
                                <p>Кофемания / Coffeemania</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Instagram