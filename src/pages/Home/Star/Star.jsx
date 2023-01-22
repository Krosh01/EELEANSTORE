import React from 'react'
import inst1 from '../../../assets/Star/inst1.png'
import inst2 from '../../../assets/Star/inst2.png'
import inst3 from '../../../assets/Star/inst3.png'
import inst4 from '../../../assets/Star/inst4.png'
import inst5 from '../../../assets/Star/inst5.png'

const Star = () => {
  return (
    <section className='Star'>
        <div className="container">
            <div className="Star_inner">
                <h1>НАШИ ЗВЕЗДНЫЕ КЛЕНТЫ И ОТЗЫВЫ</h1>
                <div className="Star_row">
                    <div className="Star_row_img">
                        <img src={inst1} alt="" />
                        <p>Альбина Джанабаева</p>
                    </div>
                    <div className="Star_row_img">
                        <img src={inst2} alt="" />
                        <p>Екатерина Данилова</p>
                    </div>
                    <div className="Star_row_img">
                        <img src={inst3} alt="" />
                        <p>Вера Брежнева</p>
                    </div>
                    <div className="Star_row_img">
                        <img src={inst4} alt="" />
                        <p>Екатерина Катова</p>
                    </div>
                    <div className="Star_row_img">
                        <img src={inst5} alt="" />
                        <p>Ирина Ургант</p>
                    </div>
                </div>  
            </div>
        </div>
    </section>
  )
}

export default Star