import React from 'react'

const Modal29 = () => {
  return (
    <section className='md29'>
        <div className='md29__main'>
            <div className='md29-close' title='Закрыть'>Закрыть</div>
            <div className='md29-body'>
                <div className='md29-body_title'>ВЫБЕРИТЕ РАЗМЕР</div>
                <div className='md29-body_radio'>
                    <label className='md29-body_card disbled'>
                        <input type="radio" disabled/>
                        <span>40</span>
                    </label>
                    <label className='md29-body_card'>
                        <input type="radio"/>
                        <span>42</span>
                    </label>
                    <label className='md29-body_card'>
                        <input type="radio" disabled/>
                        <span>44</span>
                    </label>
                    <label className='md29-body_card'>
                        <input type="radio"/>
                        <span>46</span>
                    </label>
                    <label className='md29-body_card'>
                        <input type="radio"/>
                        <span>48</span>
                    </label>
                    <label className='md29-body_card'>
                        <input type="radio"/>
                        <span>50</span>
                    </label>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Modal29