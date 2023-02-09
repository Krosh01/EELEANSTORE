import React from 'react'
import ReactPlayer from 'react-player'
import inst1 from '../../assets/Review/inst1.png'
import inst2 from '../../assets/Review/inst2.png'
import inst3 from '../../assets/Review/inst3.png'
import inst4 from '../../assets/Review/inst4.png'
import inst5 from '../../assets/Review/inst5.png'
import iconcom from '../../assets/Otziv/iconcom.svg'

const Review = () => {
    return (
        <><div className="container">
            <div className="Otzif_inner">
                <h1>ОТЗЫВЫ</h1>
                <div className="Otzif_row">
                    <div className="Otzif_row_video">
                        <div className='video_item'>
                            <ReactPlayer className="video" url='https://youtu.be/Z7O1TldAeVg' />
                        </div>
                        <p>Образ со смокингом</p>
                    </div>
                    <div className="Otzif_row_video">
                        <div className='video_item'>
                            <ReactPlayer className="video" url='https://youtu.be/Z7O1TldAeVg' />
                        </div>
                        <p>Образ с красным смокингом и черным топом</p>
                    </div>
                    <div className="Otzif_row_video">
                        <div className='video_item'>
                            <ReactPlayer className="video" url='https://youtu.be/Z7O1TldAeVg' />
                        </div>
                        <p>Синий костюм с брюками</p>
                    </div>
                    <div className="Otzif_row_video">
                        <div className='video_item'>
                            <ReactPlayer className="video" url='https://youtu.be/Z7O1TldAeVg' />
                        </div>
                        <p>Образ с костюмом</p>
                    </div>
                </div>
            </div>
        </div>
            <section className='Star'>
                <div className="container">
                    <div className="Star_inner">
                        <h1>НАШИ ЗВЕЗДНЫЕ КЛЕНТЫ И ОТЗЫВЫ</h1>
                        <div className="Star_row">
                            <div className="Star_row_img">
                                <img src={inst1} alt="" />
                                <p>Альбина Джанабаева</p>
                            </div>
                            <div className="Star_row_img">
                                <img src={inst2} alt="" />
                                <p>Екатерина Данилова</p>
                            </div>
                            <div className="Star_row_img">
                                <img src={inst3} alt="" />
                                <p>Вера Брежнева</p>
                            </div>
                            <div className="Star_row_img">
                                <img src={inst4} alt="" />
                                <p>Екатерина Катова</p>
                            </div>
                            <div className="Star_row_img">
                                <img src={inst5} alt="" />
                                <p>Ирина Ургант</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Otziv'>
                <div className="container">
                    <div className="Otziv_inner">
                        <div className="Otziv_inner_l">
                            <div className="Otziv_inner_l_content">
                                <img className='Otziv_inner_l_icon' src={iconcom} alt="" />
                                <div className="Otziv_inner_l_coment">
                                    <div className="Otziv_inner_l_coment_p">
                                        <p >Ирина <span> г. Москва</span> </p>
                                        <p>26 Марта 2017</p>
                                    </div>
                                    <div className="Otziv_inner_l_coment_text">
                                        <p>Да, доставка заграницу осуществляется курьерской службой до
                                            двери. Доставка заграницу оплачивается при оформлении
                                            заказа, фиксированная стоимость 1 200₽.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="Otziv_inner_l_content">
                                <img className='Otziv_inner_l_icon' src={iconcom} alt="" />
                                <div className="Otziv_inner_l_coment">
                                    <div className="Otziv_inner_l_coment_p">
                                        <p >Ирина <span> г. Москва</span> </p>
                                        <p>26 Марта 2017</p>
                                    </div>
                                    <div className="Otziv_inner_l_coment_text">
                                        <p>Да, доставка заграницу осуществляется курьерской службой до
                                            двери. Доставка заграницу оплачивается при оформлении
                                            заказа, фиксированная стоимость 1 200₽.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Otziv_inner_l">
                            <div className="Otziv_inner_l_content">
                                <img className='Otziv_inner_l_icon' src={iconcom} alt="" />
                                <div className="Otziv_inner_l_coment">
                                    <div className="Otziv_inner_l_coment_p">
                                        <p >Ирина <span> г. Москва</span> </p>
                                        <p>26 Марта 2017</p>
                                    </div>
                                    <div className="Otziv_inner_l_coment_text">
                                        <p>Да, доставка заграницу осуществляется курьерской службой до
                                            двери. Доставка заграницу оплачивается при оформлении
                                            заказа, фиксированная стоимость 1 200₽.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="Otziv_inner_l_content">
                                <img className='Otziv_inner_l_icon' src={iconcom} alt="" />
                                <div className="Otziv_inner_l_coment">
                                    <div className="Otziv_inner_l_coment_p">
                                        <p >Ирина <span> г. Москва</span> </p>
                                        <p>26 Марта 2017</p>
                                    </div>
                                    <div className="Otziv_inner_l_coment_text">
                                        <p>Да, доставка заграницу осуществляется курьерской службой до
                                            двери. Доставка заграницу оплачивается при оформлении
                                            заказа, фиксированная стоимость 1 200₽.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Otziv_button">СМОТРЕТЬ ВСЕ</div>
                </div>
            </section>
        </>
    )
}

export default Review