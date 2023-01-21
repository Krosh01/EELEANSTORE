
import React from 'react'
import logo from '../../assets/Header/elenlogo.svg'
import instagram from '../../assets/Header/instagram.svg'
import vk from '../../assets/Header/vk.svg'
import facebook from '../../assets/Header/f.svg'
import arrowright from '../../assets/Footer/arrowrightFooter.svg'

const Footer = () => {
  return (
    <>
      <footer className='Footer' >
        <div className="container">
          <div className="Footer_inner">
            <div className="Footer_start">
              <div className='Footer_icon'><img src={logo} alt="" /></div>
              <div className="FooterAppContact">
                <p>ТЕЛ.: 8 (495) 150-14-77</p>
                <p>WHATSAPP: +7 (977) 728-27-38</p>
              </div>
              <div className='FooterEmail' ><p>EMAIL: info@eleanboutique.ru</p></div>
            </div>
            <div className="Footer_Middle">
              <div className="Footer_nav">
                <ul>
                  <li>ДОСТАВКА</li>
                  <li>ОПЛАТА</li>
                  <li>ВОЗВРАТ</li>
                  <li>РАЗМЕРНАЯ</li>
                  <li>ПРИМЕРКА</li>
                  <li>КОНТАКТЫ</li>
                </ul>
              </div>
              <div className="Footer_Information">
                <div className="FooterAdress">
                  <p>АДРЕС: </p>
                  <p>г. Москва, Новая площадь 8, стр.2, 5 этаж</p>
                </div>
                <div className="Footer_Time_Working">
                  <p>РЕЖИМ РАБОТЫ: </p>
                  <p>с 9.00 до 21.00 шоурум: с 12.00 до 21.00</p>
                </div>
              </div>
              <div className="FooterApps">
                <img src={instagram} alt="figma" />
                <img className='FOoter_icon_apps' src={vk} alt="figma" />
                <img className='FOoter_icon_apps' src={facebook} alt="figma" />
              </div>
            </div>
            <div className="Footer_End">
              <div className="Footer_Subscribing">
                {/* <br /> */}
                <input className='Footer_input' placeholder='Имя' />
                <br />
                <input className='Footer_input2' placeholder='E-MAIL'  />
                <div className='Footer_Agreement'>
                  <input  type="checkbox" />
                  <a>Я согласен </a>
                  <p>c политикой конфиденциальности</p>
                </div>
                <button className='Footer_Subscribe_button'>
                  <p>ПОДПИСАТЬСЯ</p>
                  <img src={arrowright} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer