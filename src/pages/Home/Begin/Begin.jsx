import React from 'react';
// import slide1 from '../../../assets/Slider/slide1.png'
// import Slider from './slider';
// import UncontrolledExample from './CarouselBox';


const Begin = () => {
    return (
        <section className="begin">
            {/* <UncontrolledExample/> */}
               
        </section>
    );
};

export default Begin;

// import React, {useState} from 'react'
// // import './Slider.css'
// import BtnSlider from './BtnSlider'
// import dataSlider from './dataSlider'
// // import slide1 from '../../../../public/Imgs/img.jpg'
// // import slide2 from '../../../../public/Imgs/img1.jpg'


// export default function Slider() {

//     const [slideIndex, setSlideIndex] = useState(1)

//     const nextSlide = () => {
//         if(slideIndex !== dataSlider.length){
//             setSlideIndex(slideIndex + 1)
//             // onclick={slide1}
//         } 
//         else if (slideIndex === dataSlider.length){
//             setSlideIndex(1)
//         }
//     }

//     const prevSlide = () => {
//         if(slideIndex !== 1){
//             setSlideIndex(slideIndex - 1)
//             // onclick={slide2}

        
//         }
//         else if (slideIndex === 1){
//             setSlideIndex(dataSlider.length)
//         }
//     }

//     const moveDot = index => {
//         setSlideIndex(index)
//     }

//     return (
//         <div className="container-slider">
//             {dataSlider.map((obj, index) => {
//                 return (
//                     <div
//                     key={obj.id}
//                     className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
//                     >
//                         {/* <img src={`/Imgs/img${index +1}.jpg`}/> */}

//                         <img 
//                         src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} 
//                         />
//                     </div>
//                 )
//             })}
//             <BtnSlider moveSlide={nextSlide} direction={"next"} />
//             <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

//             <div className="container-dots">
//                 {Array.from({length: 2}).map((item, index) => (
//                     <div 
//                     onClick={() => moveDot(index + 1)}
//                     className={slideIndex === index + 1 ? "dot active" : "dot"}
//                     >
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }



