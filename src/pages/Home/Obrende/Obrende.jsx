import React from 'react';
import obrendebg from '../../../assets/obrende/obrendebg.png'
// import arrowright from '../../../assets/Footer/arrowrightFooter.svg'
import arrowright from '../../../assets/obrende/Group 1452.svg'


const Obrende = () => {
    return (
        <section className="Obrende">
            <div className="Obrende_inner">
                <h1>О БРЕНДЕ</h1>
                <div className="Obrende_LR">
                    <div className="Obrende_left">
                        <img className='Wslide1' src={obrendebg} alt="/" />
                     
                    </div>
                    <div className="Obrende_right">
                        <p className='Obrende_rightp1'>
                        Сегодня ELEAN - это первый в России 
                        магазин готового женского смокинга. 
                        У нас каждая женщина может подобрать
                         для себя образ со смокингом, такой же 
                         как у голливудских див и звезд светской 
                         хроники.
                        </p>
                        <p className='Obrende_rightp2' >
                            Костюм со смокингом ELEAN - выбор звёзд 
                            эстрады и кино, телеведущих, fashion-стилистов, 
                            успешных женщин-руководителей, представительниц 
                            научной и деловой элиты.
                        </p>
                        <p className='Obrende_rightp3' >
                        История бренда началась задолго до первого
                         показа, который состоялся 12 марта 2016 
                         года, с мечты автора коллекции, Елены 
                         Писаревой о собственном бренде элегантной
                          одежды и продолжалась долгие 30 лет 
                          накопления профессионального опыта. Вся первая 
                          коллекция была выполнена из 100% натурального
                           шелка, в нее вошли жентсвенные платья и костюмы.
                        </p>
                        <div className="Obrende_MOre">
                            <p>Подробнее \</p>
                            <img src={arrowright} alt="" />

                        </div>
                    </div>
                </div>
              
            </div>
        </section>
    );
};

export default Obrende;