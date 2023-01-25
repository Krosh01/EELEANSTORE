import React from 'react'
import ReactPlayer from 'react-player'
import Question from '../../Components/Question'

const showRoom = () => {
    return (
        <div className='Showroom'>
            <div className="container">
                <h2 class="showroom-title title">
                    <span>
                        НАШ ШОУРУМ
                    </span>
                </h2>
                <div className='imgs'>
                    <img className="secondImg" src="https://eleanboutique.ru/image/cache/catalog/novinki2021/6r4a0376-450x530.jpg" alt="" />
                    <img className="fristImg" src="https://eleanboutique.ru/image/cache/catalog/novinki2021/6r4a0346-450x530.jpg" alt="" />
                    <img src="https://eleanboutique.ru/image/cache/catalog/novinki2021/6r4a0253-450x530.jpg" alt="" />
                </div>
                <div className="allTitlesabout">
                    <div className="showroomtitles">
                        <div className="showroomabout">
                            Насладитесь уютной атмосферой пространства шоурума ELEAN, с Вами индивидуально поработает стилист бренда, поможет с выбором образа и проконсультирует.
                        </div>
                        <div className="showroomabout">
                            Угоститесь чашкой кофе или бокалом игристого, пока мы упакуем Вашу покупку.
                        </div>
                        <div className="showroomabout">
                            Визит в шоурум ELEAN - возможность побаловать себя и инвестировать время в свою уверенность и красоту.
                        </div>
                    </div>
                    <div className='lishki'>
                        <ul l className="titlesaboutshowroom">
                            <li className="lishki">Оплата банковской картой или наличными</li>
                            <li className="lishki">Заказ изделий других цветов</li>
                            <li className="lishki">Корректировка длины изделия</li>
                            <li className="lishki">Подбор готового образа</li>
                        </ul>
                    </div>
                </div>
                <div className="querstion">
                    <Question className="Questions" />
                </div>
            </div>
        </div>
    )
}

export default showRoom