import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { CustomContext } from '../../utils/context'

const formSchema = Yup.object().shape({
    name: Yup.string()
    .required('Забыли имя ;)')
    .min(3,'Должен содержать хотя бы 3 букв'),
    email: Yup.string().required('Забыли email ввести').email('Введите корекный email'),
    number: Yup.string().required('Забыли телефон ;)').min(9,'Введите коректный телефон'),
    checked: Yup.boolean().oneOf([true],'btn-tank'),
})


const Modal26 = () => {

    const validationOpt = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(validationOpt)
    const { errors } = formState
    const { aidar,setAidar} = useContext(CustomContext)
    const { aidar3, setAidar3} = useContext(CustomContext)


    function onFormSubmit(data) {
        console.log(JSON.stringify(data, null, 4))
        return false
    }

  return (
    <section className='md26'>
        <div className='md26__main'>
            <div className='md26__close' onClick={() => setAidar(!aidar)}>Закрыть</div>
            <div className='md26__content'>
                <div className='md26__content-title'>ОФОРМИТЬ ПРЕДЗАКАЗ</div>
                <div className='md26__content-subtitle'>ЕСЛИ ВАШЕГО РАЗМЕРА НЕТ В НАЛИЧИИ, ВЫ МОЖЕТЕ ОФОРМИТЬ ПРЕДЗАКАЗ.</div>
                <div className='md26__blocks'>
                    <div className='md26__blocks-first'>
                        <p className='md26__blocks-first_top'>Cрок изготовления изделий 3-5 недель. </p>
                        <p className='md26__blocks-first_bottom'>Для оформления заказа необходимо внести предоплату <b>в размере 50%.</b></p>
                    </div>
                    <div className='md26__blocks-second'>
                        <p>
                        Для получения подробной информации оставьте заявку или позвоните нам по телефону
                        <br/>
                        <br/>
                        <a>ТЕЛ.: 8 (495) 150-14-77</a>
                        <a>WHATSAPP: +7 (977) 728-27-38</a>
                        </p>
                    </div>
                </div>
                <form className='md26__form' onSubmit={handleSubmit(onFormSubmit)} >
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
                                <label className='md26__form-coment_radio-lab'>
                                    <input name='radio' type="radio" value="40"/>
                                    <span>40</span>
                                </label>
                                <label className='md26__form-coment_radio-lab'>
                                    <input name='radio' type="radio" value="42"/>
                                    <span>42</span>
                                </label>
                                <label className='md26__form-coment_radio-lab'>
                                    <input name='radio' type="radio" value="44"/>
                                    <span>44</span>
                                </label>
                                <label className='md26__form-coment_radio-lab'>
                                    <input name='radio' type="radio" value="46"/>
                                    <span>46</span>
                                </label>
                                <label className='md26__form-coment_radio-lab'>
                                    <input name='radio' type="radio" value="48"/>
                                    <span>48</span>
                                </label>
                                <label className='md26__form-coment_radio-lab'>
                                    <input name='radio' type="radio" value="50"/>
                                    <span>50</span>
                                </label>
                            </div>
                            <div className='md25__form-coment_text'>Выберите размер</div>
                        </div>
                    </div>
                    <div className='md25__form-bottom'>
                        <label className='md25__form-bottom_policy'>
                            <input type="checkbox" 
                            name='checked'
                            {...register('checked')}
                            className={`${errors.checked ? 'error' : ''}`}
                            />
                            <b></b>
                            <span>Я согласен с <Link to="/">политикой конфиденциальности</Link></span>
                        </label>
                        <button type="submit" onSubmit={() => setAidar3(!aidar3) && setAidar(!aidar)} className={`${errors.checked?.message}`}>Оформить примерку</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Modal26