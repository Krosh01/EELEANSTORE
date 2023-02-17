import React, { useContext, useState } from "react";
import elean from "../../assets/makeAnOrder/elean1_58886 2 (1).png"
import lag from "../../assets/makeAnOrder/elean47408 3.png";
import elen from "../../assets/makeAnOrder/elean1_58886 2 (1).png";
import img from "../../assets/makeAnOrder/Elean25-sajt2 1 (1).png";
import slyde1 from "../../assets/makeAnOrder/slydes/1slyde.jpeg"
import slyde2 from "../../assets/makeAnOrder/slydes/2slyde.jpeg";
import slyde3 from "../../assets/makeAnOrder/slydes/3slyde.jpeg";
import slyde4 from "../../assets/makeAnOrder/slydes/4slyde.jpeg";
import plus from "../../assets/makeAnOrder/slydes/plus.svg";
import minus from "../../assets/makeAnOrder/slydes/minus.svg";
import store from "../../redux";
import { Link } from "react-router-dom";
import Modal26 from "../modal/modal26";
import { CustomContext } from "../../utils/context";
import Modal28 from "../modal/modal28";
import Modal27 from "../modal/modal27";
import Modal25 from "../modal/modal25";

const MakeAnOrder = ({products}) => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const { aidar, setAidar} = useContext(CustomContext)
  const { aidar2, setAidar2} = useContext(CustomContext)
  const { aidar3, setAidar3} = useContext(CustomContext)
  const { aidar4, setAidar4} = useContext(CustomContext)

  return (
    <>
    {aidar && <Modal26/>}
    {aidar2 && <Modal28/>}
    {aidar3 && <Modal27 Product={products.title}/>}
    {aidar4 && <Modal25/>}
    <div className="page">
      <div className="container">
        <div className="cardList">
          <div className="cardList__left">
            <div className="cardList__left-navs">
              <div className="cardList__left-navs_item">
                <a href="#slide1">
                  <img src={products.img} alt="img" />
                </a>
              </div>
              <div className="cardList__left-navs_item">
                <a href="#slide2">
                  <img src={products.img} alt="img" />
                </a>
              </div>
              <div className="cardList__left-navs_item">
                <a href="#slide3">
                  <img src={products.img} alt="img" title="Блуза с баской" />
                </a>
              </div>
              <div className="cardList__left-navs_item">
                <a href="#slide4">
                  <img src={products.img} alt="img" title="Блуза с баской" />
                </a>
              </div>
            </div>
            <div className="cardList__left-bottom">
              <div className="cardList__left-bottom_slyder">
                <div className="cardList__left-bottom_slyder-item" id="slide1">
                  <div>
                    <img src={products.img} alt="img" title="Блуза с баской" />
                  </div>
                </div>
                <div className="cardList__left-bottom_slyder-item" id="slide2">
                  <div>
                    <img src={products.img} alt="img" title="Блуза с баской" />
                  </div>
                </div>
                <div className="cardList__left-bottom_slyder-item" id="slide3">
                  <div>
                    <img src={products.img} alt="img" />
                  </div>
                </div>
                <div className="cardList__left-bottom_slyder-item" id="slide4">
                  <div>
                    <img src={products.img} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cardList__rigth">
            <div className="cardList__rigth-top">
              <h2>{products.title}</h2>
              <div></div>
            </div>
            <div className="cardList__rigth-price">{products.price} ₽</div>
            <div className="cardList__rigth-size">
              <div className="cardList__rigth-size_title">Размер</div>
              <div className="cardList__rigth-size_radio">
                <label>
                  <input type="radio" name="size-select" disabled />
                  <span>40</span>
                </label>
                <label>
                  <input type="radio" name="size-select" />
                  <span>42</span>
                </label>
                <label>
                  <input type="radio" name="size-select" />
                  <span>44</span>
                </label>
                <label>
                  <input type="radio" name="size-select" />
                  <span>46</span>
                </label>
                <label>
                  <input type="radio" name="size-select" />
                  <span>50</span>
                </label>
                <label>
                  <input type="radio" name="size-select" />
                  <span>52</span>
                </label>
              </div>
              <div className="cardList__rigth-size_buttons">
                <a className="cardList__rigth-size_buttons-btns">
                  <span className="cardList__rigth-size_buttons-btns_icon">
                    <img
                      src="https://eleanboutique.ru/catalog/view/theme/default/assets/img/size-icon-1.svg"
                      alt="icon"
                    />
                  </span>
                  <span className="cardList__rigth-size_buttons-btns_text" onClick={() => setAidar2(!aidar2)}>
                    ОПРЕДЕЛИТЕ СВОЙ РАЗМЕР
                  </span>
                </a>
                <a className="cardList__rigth-size_buttons-btns">
                  <span className="cardList__rigth-size_buttons-btns_icon">
                    <img
                      src="https://eleanboutique.ru/catalog/view/theme/default/assets/img/size-icon-2.svg"
                      alt=""
                    />
                  </span>
                  <Link onClick={() => setAidar(!aidar)} className="cardList__rigth-size_buttons-btns_text">
                    Нет вашего размера?
                  </Link>
                </a>
              </div>
            </div>
            <div className="cardList__rigth-buttons">
              <a onClick={() => setAidar3(!aidar3)} className="cardList__rigth-buttons_big">
                Добавить в корзину
              </a>
              <div className="cardList__rigth-buttons_flex">
                <a onClick={() => setAidar4(!aidar4)}>Примерка</a>
                <a onClick={() => setAidar3(!aidar3)}>Купить в рассрочку</a>
              </div>
            </div>
            <div className="cardList__rigth-text">
              Одновременно нежная и дерзкая блуза создана стать королевой вашего
              гардероба. Удобство рубашечного кроя сочетается с женственными и
              элегантными деталями. Носите в офис с юбкой-карандаш, а на
              дружеские посиделки с джинсами. Дополнить комплект можно шелковым
              галстуком-бабочкой.
            </div>
            <div className="cardList__rigth-text pd">
              <b>Состав:</b> 100% натуральный шелк
            </div>
            <div className="cardList__rigth-parametrs">
              <div className="cardList__rigth-parametrs_item">
                <div
                  className="cardList__rigth-parametrs_item-flex"
                  onClick={() => setActive(!active)}
                >
                  <div>Параметры</div>
                  <div>
                    <img src={active ? minus : plus} alt="icon" />
                  </div>
                </div>
                <div
                  style={{ display: `${active ? "block" : "none"}` }}
                  className="cardList__rigth-parametrs_item-block"
                >
                  <div className="cardList__rigth-parametrs_item-block-flex">
                    <span>Вид застежки</span>
                    <p>пуговицы</p>
                  </div>
                  <div className="cardList__rigth-parametrs_item-block-flex">
                    <span>Длина изделия</span>
                    <p>20 см от талии</p>
                  </div>
                  <div className="cardList__rigth-parametrs_item-block-flex">
                    <span>Крой</span>
                    <p>Полуприлегающий</p>
                  </div>
                  <div className="cardList__rigth-parametrs_item-block-flex">
                    <span>Уход за вещами</span>
                    <p className="name">
                      Ручная стирка при температуре 30 градусов с использованием
                      специальных средств для стирки натурального шелка.
                      Химчистка натурального шелка.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cardList__rigth-parametrs_item">
                <div
                  className="cardList__rigth-parametrs_item-flex"
                  onClick={() => setActive2(!active2)}
                >
                  <div>Дополнительно</div>
                  <div>
                    <img src={active2 ? minus : plus} alt="icon" />
                  </div>
                </div>
                <div
                  style={{display:`${active2 ? 'block' : 'none'}`}}
                  className="cardList__rigth-parametrs_item-block"
                >
                  <div className="cardList__rigth-parametrs_item-block-flex">
                    <span>Производитель</span>
                    <p>EleanBoutique</p>
                  </div>
                  <div className="cardList__rigth-parametrs_item-block-flex">
                    <span>Размер модели на фото</span>
                    <p>44</p>
                  </div>
                  <div className="cardList__rigth-parametrs_item-block-flex">
                    <span>Рост модели на фото</span>
                    <p className="name">170</p>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="goots">
          <div className="goots__h1">ВЫГЛЯДЕТЬ БЛИСТАТЕЛЬНО ПОМОЖЕТ</div>
          <div className="goots__blok">
            <div className="elean__1">
              <img className="goots__img" src={elean} alt="" />
              <h2 className="goots__tuxedo">/ Платье-смокинг длинное</h2>
              <p className="goots__heart">
                <svg
                  width="23"
                  height="20"
                  viewBox="0 0 23 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5703 3.70142C10.9351 3.10858 8.50169 0.978395 6.34687 1.00017C4.13844 1.02277 0.729548 2.52245 1.01707 6.9662C1.2713 10.8916 11.4013 18.9636 11.4013 18.9636C11.4647 19.0121 11.5305 19.0121 11.5987 18.9636C11.5987 18.9636 21.7287 10.8908 21.9829 6.9662C22.2705 2.52245 18.8616 1.02277 16.6523 1.00017C14.1499 0.975046 11.2714 3.85214 11.2714 3.85214L9.31716 5.91953"
                    stroke="#222222"
                    stroke-miterlimit="3.8637"
                  />
                </svg>
              </p>

              <p className="goots__price">24 900 ₽</p>

              <p className="goots__text">Подчеркнет линию талии</p>
            </div>
            <div className="elean__1">
              <img className="goots__img" src={lag} alt="" />
              <h2 className="goots__tuxedo">
                / Белый смокинг и брюки с лампасами
              </h2>
              <p className="goots__heart">
                <svg
                  width="23"
                  height="20"
                  viewBox="0 0 23 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5703 3.70142C10.9351 3.10858 8.50169 0.978395 6.34687 1.00017C4.13844 1.02277 0.729548 2.52245 1.01707 6.9662C1.2713 10.8916 11.4013 18.9636 11.4013 18.9636C11.4647 19.0121 11.5305 19.0121 11.5987 18.9636C11.5987 18.9636 21.7287 10.8908 21.9829 6.9662C22.2705 2.52245 18.8616 1.02277 16.6523 1.00017C14.1499 0.975046 11.2714 3.85214 11.2714 3.85214L9.31716 5.91953"
                    stroke="#222222"
                    stroke-miterlimit="3.8637"
                  />
                </svg>
              </p>
              <p className="goots__price">41 400 ₽</p>

              <p className="goots__text">Подчеркнет линию талии</p>
            </div>
            <div className="elean__1">
              <img className="goots__img" src={elen} alt="" />
              <h2 className="goots__tuxedo">
                / Классический комплект с бабочкой
              </h2>

              <p className="goots__heart">
                <svg
                  width="23"
                  height="20"
                  viewBox="0 0 23 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5703 3.70142C10.9351 3.10858 8.50169 0.978395 6.34687 1.00017C4.13844 1.02277 0.729548 2.52245 1.01707 6.9662C1.2713 10.8916 11.4013 18.9636 11.4013 18.9636C11.4647 19.0121 11.5305 19.0121 11.5987 18.9636C11.5987 18.9636 21.7287 10.8908 21.9829 6.9662C22.2705 2.52245 18.8616 1.02277 16.6523 1.00017C14.1499 0.975046 11.2714 3.85214 11.2714 3.85214L9.31716 5.91953"
                    stroke="#222222"
                    stroke-miterlimit="3.8637"
                  />
                </svg>
              </p>
              <p className="goots__price">51 800 ₽</p>

              <p className="goots__text">Подчеркнет линию талии</p>
            </div>
            <div className="elean__1">
              <img className="goots__img" src={img} alt="" />
              <h2 className="goots__tuxedo">/ Блуза с баской</h2>

              <p className="goots__heart">
                <svg
                  width="23"
                  height="20"
                  viewBox="0 0 23 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5703 3.70142C10.9351 3.10858 8.50169 0.978395 6.34687 1.00017C4.13844 1.02277 0.729548 2.52245 1.01707 6.9662C1.2713 10.8916 11.4013 18.9636 11.4013 18.9636C11.4647 19.0121 11.5305 19.0121 11.5987 18.9636C11.5987 18.9636 21.7287 10.8908 21.9829 6.9662C22.2705 2.52245 18.8616 1.02277 16.6523 1.00017C14.1499 0.975046 11.2714 3.85214 11.2714 3.85214L9.31716 5.91953"
                    stroke="#222222"
                    stroke-miterlimit="3.8637"
                  />
                </svg>
              </p>
              <p className="goots__price">12 900 ₽</p>
              <p className="goots__text">Подчеркнет линию талии</p>
            </div>
          </div>
        </div>
        <section className="goots__twoblock">
          <h2 className="goots__twoblock-title">СШИТО ВРУЧНУЮ</h2>
          <ul className="goots__twoblock-ol">
            <li className="goots__twoblock-ol_item">
              Уровень пошива приравнивается к индивидуальному;
            </li>
            <li className="goots__twoblock-ol_item">
              Создаем лекала для костюмов, которые подчеркивают достоинства и
              скрывают недостатки фигуры;
            </li>
            <li className="goots__twoblock-ol_item">
              Качественное исполнение: ровные отстрочки, красивая обработка – вы
              можете носить вещи даже изнаночной стороной;
            </li>
            <li className="goots__twoblock-ol_item">
              Используем современное оборудование и качественные материалы для
              изготовления изделий;
            </li>
            <li className="goots__twoblock-ol_item">
              Наши швеи занимаются пошивом и конструированием одежды более 20
              лет. За это время их навыки доведены до идеала, и они продолжают
              развиваться и совершенствоваться каждый день.
            </li>
          </ul>
        </section>
        <section className="goots__third">
          <h2 className="goots__third-title">ЗАКАЖИТЕ ДОСТАВКУ</h2>
          <p className="goots__third-text">
            Закажите доставку с выездным стилистом бренда в удобное место по
            Москве и МО. Вы сможете оценить посадку, качество изделий и не
            захотите их снимать!
          </p>
          <ul className="goots__third-ol">
            <li>Выберите модели для примерки.</li>
            <li>Оставьте заявку, нажав на кноку ниже.</li>
            <li>
              Наш стилист подтвердит Вашу заявку и согласует удобное для вас
              время и место.
            </li>
            <li>
              В назначеное время стилист привезет заказаные модели и проведет
              консультацию
            </li>
            <li>Вы можете оплатить понравившиеся модели после примерки.</li>
            <li>
              <button type="button">Заказать доставку</button>
            </li>
          </ul>
        </section>
      </div>
    </div>
    </>
  );
};

export default MakeAnOrder;
