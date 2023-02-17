import React from "react";
import { Link } from "react-router-dom";

const ModalKama = () => {
  return (
    <section className="mdKama">
      <div className="mdKama__main">
        <div className="mdKama__close">Закрыть</div>
        <div className="mdKama__body">
          <div className="mdKama__body-img"></div>
          <div className="mdKama__body-text">
            Спасибо, запись на примерку успешно<br/> оформлена!
          </div>
          <div className="mdKama__body-div"></div>
          <Link to="/Favorite">Продолжить покупки</Link>
        </div>
      </div>
    </section>
  );
};

export default ModalKama;
