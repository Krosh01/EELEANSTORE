import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import Basket from './../../pages/basket/basket';
import { CustomContext } from '../../utils/context';
import { BsPeople } from 'react-icons/bs'

const HeaderStatic = () => {

  const [stickyclass, setStickyclass] = useState('')

  useEffect(() => {
    window.addEventListener('scroll', navBar)

    return () => {
      window.removeEventListener('scroll', navBar)
    };
  }, []);

  const navBar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setStickyclass('stycky-nav') : setStickyclass('')
    };
  };

  const { basket, setBasket } = useContext(CustomContext)
  const totalCount = useSelector((store) => store.task.task.reduce((asc, item) => asc + item.count, 0))

  return (
    <header className={`headerS ${stickyclass}`}>
      <div className='container'>
        <nav className='headerS__nav'>
          <li>
            <ul className='headerS__icons'>
              <li className='headerS__icons-burger'>
                <div className='header__burger'>
                  <span className='header__burger-line'></span>
                  <span className='header__burger-line'></span>
                  <span className='header__burger-line'></span>
                </div>
              </li>
              <li>
                <Link className='adapt_icon1' to='Home'>
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.59322 18.0494C2.52563 18.0494 0 15.5259 0 12.4346V5.61474C0 2.5227 2.52563 0 5.59322 0H12.3364C15.426 0 17.9296 2.5227 17.9296 5.61474V12.4346C17.9296 15.5259 15.426 18.0494 12.3364 18.0494H5.59322ZM1.82719 5.61556V12.4355C1.82719 14.5266 3.51827 16.2314 5.59322 16.2314H12.3364C14.4105 16.2314 16.1024 14.5266 16.1024 12.4355V5.61556C16.1024 3.52439 14.4105 1.81962 12.3364 1.81962H5.59322C3.51827 1.81962 1.82719 3.52439 1.82719 5.61556Z" fill="#2F2F2F" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.30664 9.02516C4.30664 6.4336 6.40359 4.32031 8.97485 4.32031C11.5461 4.32031 13.6211 6.4336 13.6211 9.02516C13.6211 11.6159 11.5461 13.73 8.97485 13.73C6.40359 13.73 4.30664 11.6159 4.30664 9.02516ZM6.15583 9.02516C6.15583 10.5937 7.41824 11.8661 8.97485 11.8661C10.5086 11.8661 11.7719 10.5937 11.7719 9.02516C11.7719 7.4566 10.5086 6.18338 8.97485 6.18338C7.41824 6.18338 6.15583 7.4566 6.15583 9.02516Z" fill="#2F2F2F" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8469 5.52449C13.0808 5.52449 12.4492 4.88871 12.4492 4.11594C12.4492 3.31937 13.0808 2.68359 13.8469 2.68359C14.6138 2.68359 15.2454 3.31937 15.2454 4.11594C15.2454 4.88871 14.6138 5.52449 13.8469 5.52449Z" fill="#2F2F2F" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link className='adapt_icon1' to='Home'>
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1226 11.6601C11.1226 11.6601 11.458 11.6217 11.6257 11.4502C11.7935 11.2778 11.7748 10.9509 11.7748 10.9509C11.7748 10.9509 11.7562 9.43951 12.4456 9.2287C13.1351 8.99825 14.0109 10.6838 14.9426 11.3153C15.6506 11.8137 16.191 11.6985 16.191 11.6985L18.6693 11.6601C18.6693 11.6601 19.9737 11.5842 19.3588 10.5498C19.3029 10.473 19.0047 9.7843 17.5131 8.38637C15.9479 6.93129 16.1529 7.16174 18.0349 4.65263C19.1715 3.10286 19.6374 2.16496 19.4883 1.7621C19.3579 1.3798 18.5194 1.47627 18.5194 1.47627L15.7057 1.49502C15.7057 1.49502 15.5016 1.47627 15.3525 1.57095C15.2034 1.64777 15.1103 1.85768 15.1103 1.85768C15.1103 1.85768 14.6631 3.06355 14.0668 4.07828C12.8183 6.20329 12.3338 6.31852 12.1289 6.18364C11.6444 5.87726 11.7562 4.93936 11.7562 4.28908C11.7562 2.20247 12.073 1.34049 11.1599 1.12969C10.8618 1.05287 10.6382 0.995703 9.85554 0.995703C8.84931 0.976945 8.01079 0.995703 7.52631 1.22616C7.20954 1.39855 6.9673 1.74245 7.11637 1.7621C7.30271 1.78086 7.71266 1.87733 7.93626 2.18371C8.21577 2.56691 8.21576 3.4673 8.21576 3.4673C8.21576 3.4673 8.38347 5.8987 7.82446 6.20419C7.45178 6.41499 6.93003 5.97373 5.81201 4.04076C5.25299 3.04569 4.82442 1.95415 4.82442 1.95415C4.82442 1.95415 4.73125 1.74335 4.58218 1.64777C4.41448 1.51378 4.15361 1.45572 4.15361 1.45572L1.48898 1.47537C1.48898 1.47537 1.09767 1.49413 0.948597 1.66563C0.81816 1.81927 0.948597 2.1453 0.948597 2.1453C0.948597 2.1453 3.01695 7.06527 5.38344 9.53419C7.54584 11.8128 10.0046 11.6592 10.0046 11.6592H11.1226V11.6601Z" fill="#2F2F2F" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link className='adapt_icon1' to='Home'>
                  <svg width="8" height="17" viewBox="0 0 8 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.28495 16.1219H1.82511V8.22679H0.113281V5.515H1.82511V3.88404C1.82511 1.65199 2.79595 0.330078 5.56704 0.330078H7.86153V3.05967H6.4318C5.35567 3.05967 5.28495 3.43666 5.28495 4.14131V5.51419H7.88002L7.57944 8.22679H5.28495V16.1219Z" fill="#2F2F2F" />
                  </svg>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <ul className='headerS__item'>
              <li><Link to='/Catalog'>НОВИНИКИ</Link></li>
              <li><Link to='/Catalog'>КАТЕГОРИИ</Link></li>
              <li><Link to='/Catalog'>НАШИ КОЛЛЕКЦИИ</Link></li>
              <li><Link to='/'><svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.87742 23.5611L0.972656 25.189V25.528H20.3814L21.3256 19.04L21.167 19.0219L17.1719 24.7654H7.64119V12.8184H13.0307L15.1684 16.1713H15.4731V8.79389H15.1684L13.0307 12.0558H7.64119V0.762617H15.9539L19.0231 6.48798H19.1875V0H0.972656V0.33902L3.87742 1.98531V23.5611Z" fill="black" /></svg></Link></li>
              <li><Link to='/'>ПОКУПАТЕЛЯМ</Link></li>
              <li><Link to='/Brand'>О БРЕНДЕ</Link></li>
              <li><Link to="showRoom">ШОУРУМ</Link></li>
              <li><Link to="Contact">КОНТАКТЫ</Link></li>
            </ul>
          </li>
          <li>
            <ul className='headerS__basket'>
              <li>
                <Link to={'Favorite'}>
                  <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637" />
                  </svg>
                  <p className='headerS__count'>0</p>
                </Link>
              </li>
              <li>
                <Link onClick={() => setBasket(!basket)}>
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.67929 20.8598H0.499023V4.50195H3.73406" stroke="#333333" stroke-miterlimit="3.8637" />
                    <path d="M5.89062 5.18856C5.89062 5.18856 5.89062 5.36384 5.89062 3.76822C5.89062 2.17355 7.09758 0.880859 8.58649 0.880859C10.0754 0.880859 11.2824 2.17355 11.2824 3.76822C11.2824 5.36288 11.2824 5.18856 11.2824 5.18856" stroke="#333333" stroke-miterlimit="3.8637" />
                    <path d="M3.75879 4.50195H19.499V20.8598H3.75879V4.50195Z" fill="#E1C4A9" />
                    <path d="M3.75879 4.50195H19.499V20.8598H3.75879V4.50195Z" stroke="black" stroke-miterlimit="3.8637" />
                    <path d="M9.12598 6.27259C9.12598 6.27259 9.12598 4.90562 9.12598 3.47365C9.12598 2.04167 10.3329 0.880859 11.8218 0.880859C13.3108 0.880859 14.5177 2.04167 14.5177 3.47365C14.5177 4.90562 14.5177 6.27259 14.5177 6.27259" stroke="#333333" stroke-miterlimit="3.8637" />
                  </svg>
                  <p className='headerS__count'>{totalCount}</p>
                </Link>
              </li>
              <li>
                <Link to="userpage"><BsPeople style={{ fontSize: "24px" }} /></Link>
              </li>
            </ul>
          </li>
        </nav>
      </div>
      <Basket />
    </header>
  )
}

export default HeaderStatic