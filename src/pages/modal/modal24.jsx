import React from 'react'
import { Link } from 'react-router-dom'

const Modal24 = () => {
  return (
    <section className='md28'>
        <div className='md28__main'>
            <Link to='/'><div className='md28__close'>Закрыть</div></Link>
            <div className='md28__content'>
                <h2 className='md28__content-title'>Таблица размеров</h2>
                <ul className='md28__content-blocks'>
                    <li>Размеры</li>
                    <li>Грудь</li>
                    <li>Талия</li>
                    <li>Бедра</li>
                    <li>Рукав</li>
                </ul>
                <ul className='md28__content-blocks'>
                    <li><b>40 XS</b></li>
                    <li>80</li>
                    <li>62</li>
                    <li>86</li>
                    <li>62</li>
                </ul>
                <ul className='md28__content-blocks'>
                    <li><b>42 S</b></li>
                    <li>84</li>
                    <li>66</li>
                    <li>90</li>
                    <li>62</li>
                </ul>
                <ul className='md28__content-blocks'>
                    <li><b>44 M</b></li>
                    <li>88</li>
                    <li>70</li>
                    <li>94</li>
                    <li>62</li>
                </ul>
                <ul className='md28__content-blocks'>
                    <li><b>46 L</b></li>
                    <li>92</li>
                    <li>74</li>
                    <li>98</li>
                    <li>62</li>
                </ul>
                <ul className='md28__content-blocks'>
                    <li><b>48 XL</b></li>
                    <li>96</li>
                    <li>78</li>
                    <li>102</li>
                    <li>62</li>
                </ul>
                <ul className='md28__content-blocks'>
                    <li><b>50 2XL</b></li>
                    <li>100</li>
                    <li>82</li>
                    <li>104</li>
                    <li>62</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Modal24