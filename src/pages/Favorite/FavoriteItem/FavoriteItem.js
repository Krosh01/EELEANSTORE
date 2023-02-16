import React from "react";

const FavoriteItem = ({ product }) => {

  return (
    <div className="favoriteItem">
      <div className="favoriteItem__first">
        <a href="#">
          <img src={product.img} alt="img" />
        </a>
        <div className="favoriteItem__first-text">
          <a href="#">{product.title}</a>
          <p>Цена: {product.price}</p>
        </div>
      </div>
      <div className="favoriteItem__second">
        <textarea
          className="favoriteItem__second-textarea"
          name=""
          cols="30"
          rows="10"
          placeholder="ДОБАВИТЬ КОММЕНТАРИЙ"
        ></textarea>
        <div className="favoriteItem__second-links">
          <a className="favoriteItem__second-links_btn">Купить</a>
          <a className="favoriteItem__second-links_btn2">Удалить</a>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
