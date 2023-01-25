import { Link } from 'react-router-dom'
import img1 from '../../assets/modal/first.jpg'
import img2 from '../../assets/modal/second.jpg'
import img3 from '../../assets/modal/third.jpg'

const Modal27 = () => {
  return (
    <section className='md27'>
        <div className='container'>
            <div className='md27__over'>
                <div className='md27__inner'>
                    <div className='md27__close' title='Закрыть'>Закрыть</div>
                    <div className='md27__main'>
                        <h2 className='md27__main-title'>
                        ЖАКЕТ-СМОКИНГ С ЛАЦКАНМИ ДОБАВЛЕН В КОРЗИНУ ПОКУПОК!
                        </h2>
                        <p className='md27__main-recom'>
                        С этим изделием чаще всего покупают:
                        </p>
                        <div className='md27__blocks'>
                            <div className='md27__blocks-card'>
                                <a className='md27__imgl'><img className='md27__jpg-imgs' src={img1} alt="" /></a>
                                <div className='md27__card'>
                                    <h2 className='md27__card-title'>/ Брюки зауженные</h2>
                                    <a href="">
                                            <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.5703 3.70142C10.9351 3.10858 8.50169 0.978395 6.34687 1.00017C4.13844 1.02277 0.729548 2.52245 1.01707 6.9662C1.2713 10.8916 11.4013 18.9636 11.4013 18.9636C11.4647 19.0121 11.5305 19.0121 11.5987 18.9636C11.5987 18.9636 21.7287 10.8908 21.9829 6.9662C22.2705 2.52245 18.8616 1.02277 16.6523 1.00017C14.1499 0.975046 11.2714 3.85214 11.2714 3.85214L9.31716 5.91953" stroke="#222222" stroke-miterlimit="3.8637"/>
                                            </svg>
                                    </a>
                                </div>
                                <div className='md27__pay'>
                                    <div className='md27__pay-price'>13 500 ₽</div>
                                    <div className='md27__pay-desc'>Благородный бархат</div>
                                </div>
                            </div>
                            <div className='md27__blocks-card'>
                                <a className='md27__imgl'><img className='md27__jpg-imgs' src={img2} alt="" /></a>
                                 <div>
                                    <div className='md27__card'>
                                        <h2 className='md27__card-title'>/ Юбка - карандаш</h2>
                                        <a href="">
                                            <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.5703 3.70142C10.9351 3.10858 8.50169 0.978395 6.34687 1.00017C4.13844 1.02277 0.729548 2.52245 1.01707 6.9662C1.2713 10.8916 11.4013 18.9636 11.4013 18.9636C11.4647 19.0121 11.5305 19.0121 11.5987 18.9636C11.5987 18.9636 21.7287 10.8908 21.9829 6.9662C22.2705 2.52245 18.8616 1.02277 16.6523 1.00017C14.1499 0.975046 11.2714 3.85214 11.2714 3.85214L9.31716 5.91953" stroke="#222222" stroke-miterlimit="3.8637"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className='md27__pay'>
                                    <div className='md27__pay-price'>10 700 ₽</div>
                                    <div className='md27__pay-desc'>Для создания романтичного образа</div>
                                </div>
                            </div>
                            <div className='md27__blocks-card'>
                                <a className='md27__imgl'><img className='md27__jpg-imgs' src={img3} alt="" /></a>
                                <div className='md27__card'>
                                    <h2 className='md27__card-title'>/ Блуза с баской</h2>
                                    <a href="">
                                            <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.5703 3.70142C10.9351 3.10858 8.50169 0.978395 6.34687 1.00017C4.13844 1.02277 0.729548 2.52245 1.01707 6.9662C1.2713 10.8916 11.4013 18.9636 11.4013 18.9636C11.4647 19.0121 11.5305 19.0121 11.5987 18.9636C11.5987 18.9636 21.7287 10.8908 21.9829 6.9662C22.2705 2.52245 18.8616 1.02277 16.6523 1.00017C14.1499 0.975046 11.2714 3.85214 11.2714 3.85214L9.31716 5.91953" stroke="#222222" stroke-miterlimit="3.8637"/>
                                            </svg>
                                    </a>
                                </div>
                                <div className='md27__pay'>
                                    <div className='md27__pay-price'>12 900 ₽</div>
                                    <div className='md27__pay-desc'>Элегантная и дерзкая</div>
                                </div>
                            </div>
                        </div>
                        <div className='md27__btn'>
                            <Link to="/" className='md27__btn-first btn'>ПРОДОЛЖИТЬ ПОКУПКИ</Link>
                            <Link to="/" className='md27__btn-second btn'>ПЕРЕЙТИ К ОФОРМЛЕНИЮ</Link>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
  )
}

export default Modal27