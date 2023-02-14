import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFavorites } from "../../../redux/reducers/dataCrad";

const CatalogRow = ({ products }) => {
    const dispatch = useDispatch()

  return (
    <div className="catalog_row">
      {products.data.map((item) => (
        <div className="catalog__card" key={item.id}>
          <img className="catalog__card-img" src={item.img} alt={item.title} />
          <img
            className="catalog__card-image"
            onClick={() => dispatch(setFavorites('favorite' ,item))}
            src={item.image}
            alt={item.image}
          />
          <h3 className="catalog__card-title">{item.title}</h3>
          <p className="catalog__card-price">{item.price} ₽</p>
          <p className="catalog__card-text">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CatalogRow;
