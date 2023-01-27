import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

const formSchema = Yup.object().shape({
    name: Yup.string()
    .required('Забыли имя ;)')
    .min(3,'Должен содержать хотя бы 3 букв'),
    email: Yup.string().required('Забыли email ввести').email('Введите корекный email'),
    number: Yup.string().required('Забыли телефон ;)').min(9,'Введите коректный телефон'),
    che: Yup.boolean().oneOf([true],'btn-tank'),
})



const Modal25 = () => {

    const validationOpt = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(validationOpt)
    const { errors } = formState

    function onFormSubmit(data) {
        console.log(JSON.stringify(data, null, 4))
        return false
    }

  return (
    <section className='md25'>
        <div className='md25__main'>
            <div className='md25__close'>Закрыть</div>
            <div className='md25__content'>
                <div className='md25__title'>ХОТИТЕ ПРИМЕРИТЬ ДАННУЮ МОДЕЛЬ ПЕРЕД ПОКУПКОЙ? ЛЕГКО!</div>
                <div className='md25__mid'>
                Поскольку фотографии не передают истинное качество и структуру тканей, ощущение от нежнейщего прикосновения шелка на вашемтеле, мы предлагаем примерить моделиперед покупкой.
                </div>
                <div className='md25__fiting'>
                    <div className='md25__fiting-block'>
                        <div className='md25__fiting-item'>
                                <div className='md25__fiting-icon'>
                                    <svg width="58" height="42" viewBox="0 0 58 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.00305 37L7 3.15524C7 1.96501 7.80494 1 8.79774 1H50.2023C51.1951 1 52 1.96501 52 3.15524V36.8755" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M29.0566 37.7435H33.2354V36.8027H57.0003V37.5749C57.0003 37.5749 57.004 40.1545 53.8069 40.2588C51.2514 40.3418 29.0566 40.2588 29.0566 40.2588" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M35.0563 37.7435H26.2494V36.8027H1V37.5749C1 37.5749 0.996122 40.1545 4.393 40.2588C7.10818 40.3418 35.0563 40.2588 35.0563 40.2588" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M29.8975 28H34.5872V18.0345L38.1044 19.7931L41.0354 16.2759L35.7596 11H32.8285C32.6331 11.977 31.5389 13.931 28.7251 13.931" stroke="#C8AB90" stroke-width="2"/>
                                        <path d="M29.8975 28H23.4492V18.0345L19.9319 19.7931L17.0009 16.2759L22.2768 11H25.2078C25.4032 11.977 26.4975 13.931 29.3113 13.931" stroke="#C8AB90" stroke-width="2"/>
                                    </svg>
                                </div>
                                <div className='md25__fiting-text'>
                                Выберите модели для примерки.
                                </div>
                        </div>
                    </div>
                    <div className='md25__fiting-block'>
                        <div className='md25__fiting-item'>
                                <div className='md25__fiting-icon'>
                                    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.37641 31.8463C2.4807 28.7714 1.41895 25.1577 1.41895 21.2912C1.41895 10.085 10.5034 1 21.7097 1C32.916 1 42.0004 10.0844 42.0004 21.2912C42.0004 25.2093 40.8902 28.8676 38.9673 31.9691" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M0.986328 31.8498H4.40838L5.3035 27.9102" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M41.9992 31.8717H38.9426L38.1138 27.9102" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M14.5815 16.2474C14.5815 16.2474 16.4321 16.6677 16.4321 15.2803C16.4321 13.8923 16.4321 13.6314 16.4321 13.6314C16.4321 13.6314 16.2217 12.2853 17.9549 12.2853C19.6881 12.2853 23.2294 12.2853 23.2294 12.2853C23.2294 12.2853 25.173 12.2516 25.846 10.6875" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M25.8488 10.7721V12.16C25.8488 12.16 27.1524 11.8572 27.1524 13.2957C27.1524 14.7342 27.1524 14.7766 27.1524 14.7766C27.1524 14.7766 26.9926 16.543 29.0536 16.543V9.71252C29.0536 9.71252 28.7589 6.88607 26.5212 6.88607C24.2836 6.88607 19.1776 6.88607 19.1776 6.88607C19.1776 6.88607 17.2851 6.63381 17.2851 9.12374C17.2851 9.12374 14.543 8.58553 14.543 11.0249C14.543 13.4643 14.543 18.1918 14.543 18.1918" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637" stroke-linecap="round"/>
                                        <path d="M28.2777 19.0449C28.2777 22.9728 25.3675 26.5734 21.7778 26.5734C18.1881 26.5734 15.2773 22.9728 15.2773 19.0449" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637" stroke-linecap="round"/>
                                        <path d="M17.7349 24.8867V29.5692L21.9199 30.8337L25.8641 29.5165V24.8867" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M17.7351 29.4629H16.0264L13.6022 31.9398C13.6022 31.9398 9.31118 32.4889 7.28662 35.6203" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M25.9194 29.4082H27.2894L29.7886 31.7274C29.7886 31.7274 33.9742 31.697 36.3146 35.7244" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M7.2334 35.7266C7.2334 35.7266 11.4494 41.7263 21.9202 41.7263C32.3909 41.7263 36.2073 35.7266 36.2073 35.7266" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637" stroke-linecap="round"/>
                                        <path d="M13.4946 31.8867L18.9975 34.649L21.9712 32.0449L24.7335 34.7018L29.8368 31.834" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M21.9199 30.832V32.1498" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M29.077 16.5293V18.0189L28.2974 19.0529" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M14.5493 18.082L15.2745 19.1155" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                    </svg>
                                </div>
                                <div className='md25__fiting-text'>
                                В назначеное время стилист привезет заказаные модели и проведет консультацию.
                                </div>
                        </div>
                    </div>
                    <div className='md25__fiting-block'>
                        <div className='md25__fiting-item'>
                                <div className='md25__fiting-icon'>
                                    <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.7212 17.2334L23.2654 19.777L27.1362 15.9062" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M24.0234 24.7226C27.9136 24.7226 31.0673 21.5689 31.0673 17.6787C31.0673 13.7884 27.9136 10.6348 24.0234 10.6348C20.1332 10.6348 16.9795 13.7884 16.9795 17.6787C16.9795 21.5689 20.1332 24.7226 24.0234 24.7226Z" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M10.7368 3.73047H7.88135V23.1475" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M13.2671 6.68555H34.7193" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M5.52767 16.3522H1.00391V43.9993H44.1026V16.3086H39.666" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M1.30029 43.9997L22.6441 27.4043L43.9731 43.9997" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M37.3773 23.346V1H10.7363V26.0272" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M1 16.4551L14.8012 30.2557" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M44.1024 16.4551L30.3013 30.2557" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                    </svg>
                                </div>
                                <div className='md25__fiting-text'>
                                Оставьте заявку, нажав на кноку ниже.
                                </div>
                        </div>
                    </div>
                    <div className='md25__fiting-block'>
                        <div className='md25__fiting-item'>
                                <div className='md25__fiting-icon'>
                                    <svg width="37" height="48" viewBox="0 0 37 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.999 37.4353V8.88867H3.99902V40.7776H24.999V37.4353Z" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M12.9346 43.9434H15.7105" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M28.2222 37.4255V43.3206C28.2222 45.3527 26.5453 47.0002 24.4768 47.0002H4.7454C2.67692 47.0002 1 45.3527 1 43.3206V4.79099C1 2.75881 2.67692 1.11133 4.7454 1.11133H24.4768C26.5453 1.11133 28.2222 2.75881 28.2222 4.79099V37.4255Z" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <rect x="10.9995" y="4.22266" width="7" height="1.55556" fill="#B59475"/>
                                        <rect x="7.99902" y="13.5566" width="23.3333" height="23.3333" fill="#F2F1F0"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99902 16.447C7.99902 16.1383 8.22394 15.8887 8.50083 15.8887H35.4972C35.7746 15.8887 35.999 16.1383 35.999 16.447V33.997C35.999 34.3056 35.7741 34.5553 35.4972 34.5553H8.50083C8.22394 34.5553 7.99902 34.3056 7.99902 33.997V16.447Z" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <rect x="8.77734" y="19" width="27.2222" height="1.55556" fill="#B59475"/>
                                        <rect x="8.77734" y="24.4453" width="27.2222" height="1.55556" fill="#B59475"/>
                                        <rect x="10.3335" y="27.5547" width="8.55556" height="1.55556" fill="#B59475"/>
                                        <path d="M32.8898 28.334H21.2231V31.4451H32.8898V28.334Z" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                    </svg>

                                </div>
                                <div className='md25__fiting-text'>
                                Вы можете оплатить понравившиеся модели после примерки.
                                </div>
                        </div>
                    </div>
                    <div className='md25__fiting-block'>
                        <div className='md25__fiting-item'>
                                <div className='md25__fiting-icon'>
                                    <svg width="44" height="47" viewBox="0 0 44 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.0003 28.857C23.1274 28.857 24.0411 27.9433 24.0411 26.8162C24.0411 25.6891 23.1274 24.7754 22.0003 24.7754C20.8732 24.7754 19.9595 25.6891 19.9595 26.8162C19.9595 27.9433 20.8732 28.857 22.0003 28.857Z" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M22.1305 13.3477C29.4979 13.3477 35.4704 19.378 35.4704 26.8173C35.4704 34.2561 29.4979 40.2864 22.1305 40.2864C18.4041 40.2864 15.0086 38.7432 12.6133 36.2557" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M22.0006 45.9982C32.5954 45.9982 41.1842 37.4094 41.1842 26.8145C41.1842 16.2197 32.5954 7.63086 22.0006 7.63086C11.4057 7.63086 2.81689 16.2197 2.81689 26.8145C2.81689 37.4094 11.4057 45.9982 22.0006 45.9982Z" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M21.9997 7.63225C23.5777 7.63225 24.8569 6.35307 24.8569 4.77511C24.8569 3.19716 23.5777 1.91797 21.9997 1.91797C20.4218 1.91797 19.1426 3.19716 19.1426 4.77511C19.1426 6.35307 20.4218 7.63225 21.9997 7.63225Z" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.1981L6.30235 6.81641L8.53061 9.08665L4.34689 13.347L2 11.1981Z" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M41.9989 11.1981L37.6971 6.81641L35.4683 9.08665L39.652 13.347L41.9989 11.1981Z" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637"/>
                                        <path d="M12.6133 36.2043L20.3684 28.4492" stroke="#C8AB90" stroke-width="2" stroke-miterlimit="3.8637" stroke-linecap="square"/>
                                    </svg>
                                </div>
                                <div className='md25__fiting-text'>
                                Наш стилист подтвердит Вашу заявку и согласует удобное для вас время и место
                                </div>
                        </div>
                    </div>
                </div>
                <form className='md25__form' onSubmit={handleSubmit(onFormSubmit)}>
                    <div className='md25__form-flex'>
                        <div className='md25__form-flex_error'>
                            <input
                            type="text" placeholder='Введите имя'
                            name='name'
                            {...register('name')}
                            className={`md25__form-flex_inp ${errors.name ? 'error' : ''}`}
                            />
                            <div className='md25__form-flex_bug'>
                                <ul className='md25__form-flex_bug-ul error'>
                                    <li>{errors.name?.message}</li>
                                </ul>
                            </div>
                        </div>
                        <div className='md25__form-flex_error'>
                            <input 
                            type='number'
                            name='number'
                            {...register('number')}
                            className={`md25__form-flex_inp ${errors.number ? 'error' : ''}`} placeholder='Введите Телефон'
                            />
                            <div className='md25__form-flex_bug'>
                                <ul className='md25__form-flex_bug-ul error'>
                                    <li>{errors.number?.message}</li>
                                </ul>
                            </div>
                        </div>
                        <div className='md25__form-flex_error'>
                            <input
                            name='email'
                            {...register('email')}
                            className={`md25__form-flex_inp ${errors.email ? 'error' : ''}`} type="text" placeholder='Введите e-mail'
                            />
                            <div className='md25__form-flex_bug'>
                                <ul className='md25__form-flex_bug-ul error'>
                                    <li>{errors.email?.message}</li>
                                </ul>
                            </div> 
                        </div>
                    </div>
                    <div className='md25__form-coment'>
                        <textarea className='md25__form-coment_textarea' name="textarea"rows="3" placeholder='Добавить коментарии'></textarea>
                        <div className='md25__form-coment_check'>
                            <div className='md25__form-coment_radio'>
                                <label className='md25__form-coment_radio-lab'>
                                    <input name='radio' type="radio" value="40" disabled/>
                                    <span>40</span>
                                </label>
                                <label className='md25__form-coment_radio-lab'>
                                    <input name='radio' type="radio" value="42"/>
                                    <span>42</span>
                                </label>
                                <label className='md25__form-coment_radio-lab'>
                                    <input name='radio' type="radio" value="44"/>
                                    <span>44</span>
                                </label>
                                <label className='md25__form-coment_radio-lab'>
                                    <input name='radio' type="radio" value="46"/>
                                    <span>46</span>
                                </label>
                                <label className='md25__form-coment_radio-lab'>
                                    <input name='radio' type="radio" value="48"/>
                                    <span>48</span>
                                </label>
                                <label className='md25__form-coment_radio-lab'>
                                    <input name='radio' type="radio" value="50"/>
                                    <span>50</span>
                                </label>
                            </div>
                            <div className='md25__form-coment_text'>Выберите размер</div>
                        </div>
                    </div>
                    <div className='md25__form-bottom'>
                        <label className='md25__form-bottom_policy'>
                            <input type="checkbox" required
                            name='che'
                            {...register('che')}
                            className={`${errors.che ? 'error' : ''}`}
                            />
                            <b></b>
                            <span>Я согласен с <Link to="/">политикой конфиденциальности</Link></span>
                        </label>
                        <button type="submit" className={`${errors.che?.message}`}>Оформить примерку</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Modal25