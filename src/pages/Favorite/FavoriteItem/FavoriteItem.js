import React from "react";
import { useDispatch } from "react-redux";
import { deleteChosen } from "../../../redux/reducers/dataCrad";

const FavoriteItem = ({ item }) => {

    const dispath = useDispatch();
    
    return (
        <div className="favoriteItem">
            <div className="favoriteItem__first">
                <a href="#">
                    <img src={item.image} alt="img" />
                </a>
                <div className="favoriteItem__first-text">
                    <a href="#">{item.title}</a>
                    <p>Цена: {item.price}</p>
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
                    <a className="favoriteItem__second-links_btn">
                        Купить
                    </a>
                    <a
                        className="favoriteItem__second-links_btn2"
                        onClick={() => {
                            dispath(deleteChosen(item.id));
                        }}
                    >
                        Удалить
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FavoriteItem;