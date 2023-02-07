import React from "react";
import { useSelector } from "react-redux";
import store from "../../redux";
import FavoriteItem from "./FavoriteItem/FavoriteItem";

const Favorite = () => {

    const task = useSelector((store) => store.task.task);

    return (
        <div className="favorites">
            <div className="container">
                <h2 className="favorites__title">Избранное</h2>
                <div className="favorites__content">
                    <form action="#">
                        {task.length !== 0 ? (
                            task.map((item) => <FavoriteItem item={item} />)
                        ) : (
                            <div className="favorites__empty">Избранное пуста</div>
                        )}
                    </form>
                </div>
                {task.length !== 0 && (
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