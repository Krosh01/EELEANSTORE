import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useSelector } from "react-redux";
import store from "../../redux";
import FavoriteItem from './FavoriteItem/FavoriteItem'



const Favorite = () => {
  const favorite = useSelector((store) => store.favorite.favorite)
  return (
    <div className="favorites">
      <div className="container">
        <FloatingWhatsApp />
        <h2 className="favorites__title">Избранное</h2>
        <div className="favorites__content">
          <form action="#">
            {favorite.length !== 0 ? (
              favorite.map((product => <FavoriteItem product={product}  key={product.id}/>))
            ) : (
              <div className="favorites__empty">Избранное пустое</div>
            )}
          </form>
        </div>
        {favorite.length !== 0 && (
          <div className="favorites__action">
            <h2 className="favorites__action-title">
              ДЕЙСТВИЯ НАД ЛИСТОМ ПОЖЕЛАНИЙ{" "}
            </h2>
            <div className="favorites__action-block">
              <a href="">ОТПРАВИТЬ НА ПОЧТУ</a>
              <p>
                Список товаров находящихся в “избронном”, будет отправлен на ваш
                электронный адрес, и вы в любой момент сможете получить к нему
                доступ.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
