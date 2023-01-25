import React from 'react'
import { TbHanger } from 'react-icons/tb'

const ContactQuestion = () => {

    const inpStyles = {
        width: "300px",
        height: "60px",
        padding: "20px"
    }

    const iconStyle = {
        fill: "#C0A78F",
        fontSize: "30px"
    }

    return (
        <div>
            <div className='ContactInner'>
                <div className='ContactShapka'>
                    <h1 className="headerContactQuestion">
                        ЗАПИСАТЬСЯ НА ПРИМЕРКУ В ШОУРУМЕ
                    </h1>
                    <TbHanger style={iconStyle} />
                </div>
                <form className='formInpInfo' action="FIO">
                    <input style={inpStyles} type="text" placeholder='Введите имя' />
                    <input style={inpStyles} type="number" placeholder='Введите Телефон' />
                </form>
                <form action="data">
                    <input style={{ width: "600px", height: "60px", padding: "20px" }} type="date" placeholder='Выберите удобное для вас время ' />
                </form>
                <form action="comment" style={{ marginTop : "30px" }}>
                    <input type="text" style={{ width: "400px", height: "130px" , padding : "26px" }} placeholder='Добавьте комментарий' />
                    <button style={{
                        transform : "translateY(-35px)" ,
                        width: "182px",
                        height: "60px"
                    }} type='confirm' className='commentConfirmButton'>ЗАПИСАТЬСЯ</button>
                </form>
            </div>
        </div>
    )
}

export default ContactQuestion