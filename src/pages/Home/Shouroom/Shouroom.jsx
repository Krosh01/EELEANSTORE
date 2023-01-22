import React from 'react'
import img1 from '../../../assets/shouroom/shouroom1.png'
import img2 from '../../../assets/shouroom/shouroom2.png'
import img3 from '../../../assets/shouroom/shouroom3.png'

const Shouroom = () => {
  return (
    <section className='Shouroom'>
        <div className="container">
            <div className="Shouroom_inner">
                <h1>НАШ ШОУРУМ</h1>
               <div className="Shouroom_photo_row">
                        <img  className="Shouroom_img1" src={img1} alt="/" />
                        <img  className="Shouroom_img2" src={img2} alt="/" />
                        <img  className="Shouroom_img3" src={img3} alt="/" />
                </div> 
            </div>
        </div>
    </section>
  )
}

export default Shouroom