import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CustomContext } from '../../utils/context'

const Modal28 = () => {

    const { aidar2, setAidar2} = useContext(CustomContext)

  return (
    <section className='md28'>
        <div className='md28__main'>
            <div className='md28__close' onClick={() => setAidar2(!aidar2)}>Закрыть</div>
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
                    <li><b>40</b></li>
                    <li>80</li>
                    <li>62</li>
                    <li>86</li>
                    <li>62</li>
                </ul>
                <ul className='md28__content-blocks'>
                    <li><b>42</b></li>
                    <li>84</li>
                    <li>66</li>
                    <li>90</li>
                    <li>62</li>
                </ul>
                <ul className='md28__content-blocks'>
                    <li><b>44</b></li>
                    <li>88</li>
                    <li>70</li>
                    <li>94</li>
                    <li>62</li>
                </ul>
                <ul className='md28__content-blocks'>
                    <li><b>46</b></li>
                    <li>92</li>
                    <li>74</li>
                    <li>98</li>
                    <li>62</li>
                </ul>
                <ul className='md28__content-blocks'>
                    <li><b>48</b></li>
                    <li>96</li>
                    <li>78</li>
                    <li>102</li>
                    <li>62</li>
                </ul>
                <ul className='md28__content-blocks'>
                    <li><b>50</b></li>
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

export default Modal28