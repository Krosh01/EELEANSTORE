import React from 'react'
import Yandexmaps from '../../Components/YandexMaps/YandexMaps'
import { BsTelephonePlus, BsWhatsapp, BsFileDiff, BsClockHistory, BsCompass } from 'react-icons/bs'
import { AiOutlineMessage } from 'react-icons/ai'
import { RiErrorWarningLine } from 'react-icons/ri'
import ContactQuestion from '../../Components/ContactsQuestion/ContactQuestion'

const Contact = () => {

    const hStyle = {
        fontWeight: "400",
        fontSize: "21px",
        lineHeight: "20px",
        textAlign: "center",
        letterSpacing: "0.05em",
        color: "#272727",
        textTransform: "uppercase",
        padding: "40px"
    }

    const pStyle = {
        fontWeight: "400",
        fontSize: "15px",
        lineHeight: "22px",
        letterSpacing: "0.05em",
        color: "#000000"
    }

    const iconStyles = {
        fill: "#C0A78F",
        fontSize : "24px"
    }

    return (
        <div className='container'>
            <h1 style={hStyle}>Контакты</h1>
            <div className="innerSite">
                <div className='innerLeft'>
                    <div className='YMaps'>
                        <Yandexmaps />
                    </div>
                </div>
                <div className='innerRight'>
                    <div className='RightContactfirst'>
                        <div className="RightContentinner">
                            <div className="RightLeft">
                                <div className="numberfirstcontact">
                                    <BsTelephonePlus style={iconStyles} />
                                    <p style={pStyle} className='PhoneContent'>ТЕЛ.: 8 (495) 150-14-77</p>
                                </div>
                                <div className="numberfirstcontact">
                                    <AiOutlineMessage style={iconStyles} />
                                    <p style={pStyle} className="MessageContent">EMAIL: info@eleanboutique.ru</p>
                                </div>
                                <div className="numberfirstcontact">
                                    <BsWhatsapp style={iconStyles} />
                                    <p style={pStyle} className="WhatsupContent">WHATSAPP: +7 (977) 728-27-38</p>
                                </div>
                            </div>
                            <div className="RightRight">
                                <div className="numberfirstcontact">
                                    <BsFileDiff style={iconStyles} />
                                    <p style={pStyle} className="FileContent">ИП ПИСАРЕВА Е.М.</p>
                                </div>
                                <div className="numberfirstcontact">
                                    <RiErrorWarningLine style={iconStyles} />
                                    <p style={pStyle} className="ErrorContent">ОГРНИП 307610509600011</p>
                                </div>
                            </div>
                        </div>
                        <div className="innerDown">
                            <h1 className='h1StyleContact'>АДРЕС И РЕЖИМ РАБОТЫ</h1>
                            <div className='DownContent'>
                                <div className="DownClock">
                                    <BsClockHistory style={iconStyles}/>
                                    <p style={pStyle} className="ClockContent">
                                        с 9.00 до 21.00 шоурум: с 12.00 до 21.00
                                    </p>
                                </div>
                                <div className="DownClock">
                                    <BsCompass style={iconStyles}/>
                                    <p style={pStyle} className="CompasContent">
                                        АДРЕС: г. Москва, Новая площадь 8, стр.2, 5 этаж
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ContactQuestion />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
