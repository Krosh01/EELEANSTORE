import ReactPlayer from 'react-player'
import { useState } from 'react'
import eleanBg from '../../assets/Pages/Primerka/eleanbg.png'
import PrimerkaIcon from '../../assets/Primerka/Primerka.svg'

const Primerka = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [time, setTime] = useState('')
    const [comment, setComment] = useState('')
    function f2() {
        setName('')
        setPhone('')
        setTime('')
        setComment('')
    }

    return (
        <>
            <div className='container'>
                <div className='primer'>
                    <div className='top'>
                        <h2 className='fitting'>ПРИМЕРКА</h2>
                        <div className='moscow'><h3>ПО МОСКВЕ:</h3></div>
                        <br />
                        <div>
                            <p>— Вы можете примерить и подобрать желанный образ изделий в <br /> нашем шоуруме.</p>
                            <br />
                            <p>— В удобное место и время можно заказать примерку со стилистом<br /> бренда, подобрать желанный образ и получить индивидуальные<br /> рекомендации.Примерка может занимать до 2-х часов.</p>
                            <br />
                            <p>— Также можно заказать доставку с возможностью примерки перед<br /> покупкой, в течение 15-ти минут.</p>
                        </div>
                        <div className='russian'><h3>ПО РОССИИ</h3></div>
                        <div>
                            <br />
                            <p>— Заказы по России отправляются по полной предоплате на сайте <br /> картой любого банка, без комиссии.</p>
                            <br />
                            <p>— Можно сделать доставку с возможностью примерки в течение 15-ти <br /> минут, об этом нужно сообщить менеджеру при подтверждении <br /> заказа. Если изделие Вам не подходит, Вы можете сразу же его <br /> отдать курьеру. Затем связаться с нами по телефону 8 495 150 14 <br /> 77, чтобы оформить обмен или возврат. Подробнее здесь (ссылка на <br /> страницу обмен и возврат)</p>
                        </div>
                    </div>

                    <img style={{
                        width: "110%",
                        transform: "translateX(-320px)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        position: "relative"
                    }} src={eleanBg} alt='elean'
                    />

                    <div className='table'>
                        <div className='table__main'>
                            <div className='table__content'>
                                <h2 className='table__content-title'>Таблица размеров</h2>
                                <ul className='table__content-blocks'>
                                    <li>Размеры</li>
                                    <li>Грудь</li>
                                    <li>Талия</li>
                                    <li>Бедра</li>
                                    <li>Рукав</li>
                                </ul>
                                <ul className='table__content-blocks border'>
                                    <li><b>40<span>XS</span></b></li>
                                    <li>80</li>
                                    <li>62</li>
                                    <li>86</li>
                                    <li>62</li>
                                </ul>
                                <ul className='table__content-blocks border'>
                                    <li><b>42<span>S</span></b></li>
                                    <li>84</li>
                                    <li>66</li>
                                    <li>90</li>
                                    <li>62</li>
                                </ul>
                                <ul className='table__content-blocks border'>
                                    <li><b>44<span>M</span></b></li>
                                    <li>88</li>
                                    <li>70</li>
                                    <li>94</li>
                                    <li>62</li>
                                </ul>
                                <ul className='table__content-blocks border'>
                                    <li><b>46<span>L</span></b></li>
                                    <li>92</li>
                                    <li>74</li>
                                    <li>98</li>
                                    <li>62</li>
                                </ul>
                                <ul className='table__content-blocks border'>
                                    <li><b>48<span>XL</span></b></li>
                                    <li>96</li>
                                    <li>78</li>
                                    <li>102</li>
                                    <li>62</li>
                                </ul>
                                <ul className='table__content-blocks border'>
                                    <li><b>50<span>2XL</span></b></li>
                                    <li>100</li>
                                    <li>82</li>
                                    <li>104</li>
                                    <li>62</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='reviews_block'>
                        <h2 className='h2'>ВИДЕО ПРИМЕРОК</h2>
                        <div className="reviews_row">
                            <div className='reviews_video'>
                                <ReactPlayer className="reviews" url='https://youtu.be/Z7O1TldAeVg' />
                            </div>
                            <div className='reviews_video'>
                                <ReactPlayer className="reviews" url='https://youtu.be/Z7O1TldAeVg' />
                            </div>
                            <div className='reviews_video'>
                                <ReactPlayer className="reviews" url='https://youtu.be/Z7O1TldAeVg' />
                            </div>
                        </div>
                    </div>
                    <div className="form_inner">
                        <div className='formIcon'>
                            <img className='formIcon' src={PrimerkaIcon} alt="" />
                        </div>
                        <h1>ЗАПИСАТЬСЯ НА ПРИМЕРКУ В ШОУРУМЕ</h1>
                        <div className="form_input_row1">
                            <input onChange={(e) => setName(e.target.value)} value={name} className='form_input' type="text" placeholder=' ВВЕДИТЕ ИМЯ' />
                            <input onChange={(e) => setPhone(e.target.value)} value={phone} className='form_input' type="text" placeholder='ВВЕДИТЕ ТЕЛЕФОН' />
                        </div>
                        <div className="form_input_row2">
                            <input onChange={(e) => setTime(e.target.value)} value={time} className='form_input_time' type="text" placeholder='ВВЕДИТЕ УДОБНОЕ ВРЕМЯ' />
                        </div>
                        <div className="form_input_row3">
                            <input onChange={(e) => setComment(e.target.value)} value={comment} className='form_input_coment' type="text" placeholder='ДОБАВИТЬ КОММЕНТАРИЙ' />
                            <button onClick={f2} className='form_button'> ЗАПИСАТЬСЯ </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Primerka