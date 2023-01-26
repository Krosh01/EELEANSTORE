import React from 'react'
import icon from '../assets/deliver/Group 1484.svg'

const Question = () => {
    return (
        <div>
            <div className='deliver__questions'>
                <div className='deliver__questions-block'>
                    <img className='deliver__questions-icon' src={icon} alt="icon" />
                    <h2 className='deliver__questions-title'>ЗАДАТЬ ВОПРОС</h2>
                    <form className='deliver__questions-form'>
                        <div className='deliver__questions-object'><input className='deliver__questions-object_inp' type="text" placeholder='Введите имя' required /></div>
                        <div className='deliver__questions-object'><input className='deliver__questions-object_inp' type="number" placeholder='Введите номер' required /></div>
                        <div className='deliver__questions-object'><input className='deliver__questions-object_inp' type="email" placeholder='Введите свой email' required /></div>
                        <textarea className='deliver__questions-object_textarea' name="textArea" id="" data-minLength="5" rows="3" placeholder='Сообщение'></textarea>
                        <button className='deliver__questions-btn' type='submit'>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Question