import React from 'react'
import eleanBg from '../../assets/Pages/Primerka/eleanbg.png'

const Primerka = () => {

    const hStyle = {
        fontWeight: "400",
        fontSize: "21px",
        lineHeight: "20px",
        textAlign: "center",
        letterSpacing: "0.05em",
        color: "#272727"
    }

    return (
        <div className='container'>
            <div className="PrimerkaInner">
                <div className="PrimerkaLeftImg">
                    <img style={{
                        width: "80%",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        position: "relative"
                    }} src={eleanBg} alt='elean' />
                </div>
            </div>
        </div>
    )
}


export default Primerka