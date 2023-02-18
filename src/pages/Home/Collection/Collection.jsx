import React, { useContext } from "react";
import collect1 from "../../../assets/Collection/collect1.png";
import collect2 from "../../../assets/Collection/collect2.png";
import collect3 from "../../../assets/Collection/collect3.png";
import collect4 from "../../../assets/Collection/collect4.png";
import collect5 from "../../../assets/Collection/collect5.png";
import collect6 from "../../../assets/Collection/collect6.png";
import collect7 from "../../../assets/Collection/collect7.png";
import collect8 from "../../../assets/Collection/collect8.png";
import collect08 from "../../../assets/Collection/collect08.png";
import collect9 from "../../../assets/Collection/collect9.png";
import { CustomContext } from "../../../utils/context";
import { Link } from "react-router-dom";

const Collection = () => {
  const { changeCategory } = useContext(CustomContext);
  return (
    <section className="collection">
      <div className="container">
        <div className="collection_inner">
          <div className="collection_inner_top">
            <div className="collection_left">
              <Link
                to="/Catalog"
                className="collection_left_up"
                onClick={() => changeCategory("novelties")}
              >
                <p>Новинки</p>
                <img className="adaptivka_img1" src={collect1} alt="" />
              </Link>
              <div className="colliction_left_down">
                <Link
                  to="/Catalog"
                  className="left_down_img"
                  onClick={() => changeCategory("tuxedo")}
                >
                  <p>Смокиниги</p>
                  <img className="adaptivka_img2" src={collect2} alt="" />
                </Link>
                <Link
                  to="/Catalog"
                  className="left_down_img"
                  onClick={() => changeCategory("trousers")}
                >
                  <p>Брюки</p>
                  <img className="adaptivka_img3" src={collect3} alt="" />
                </Link>
              </div>
            </div>
            <div className="collection_right">
              <div className="collection_right_up">
                <Link
                  to="/Catalog"
                  className="right_down_img"
                  onClick={() => changeCategory("Evening sets")}
                >
                  <p>Акции</p>
                  <img className="adaptivka_img4" src={collect4} alt="" />
                </Link>
                <Link
                  to="/Catalog"
                  className="right_down_img"
                  onClick={() => changeCategory("suits")}
                >
                  <p>Костюмы</p>
                  <img className="adaptivka_img5" src={collect5} alt="" />
                </Link>
              </div>
              <Link
                to="/Catalog"
                className="colliction_right_down"
                onClick={() => changeCategory("dresses")}
              >
                <p>Платья</p>
                <img className="adaptivka_img6" src={collect6} alt="" />
              </Link>
            </div>
          </div>
          <div className="collection_inner_down">
            <div className="collection_inner_down_left">
              <Link
                to="/Catalog"
                className="collection_inner_down_img1"
                onClick={() => changeCategory("blouses")}
              >
                <p>Блузы</p>
                <img className="adaptivka_img7" src={collect7} alt="" />
              </Link>
              <Link
                to="/Catalog"
                className="collection_inner_down_img2"
                onClick={() => changeCategory("skirt")}
              >
                <p>Юбки</p>
                <img className="adaptivka_img8" src={collect8} alt="" />
              </Link>
            </div>
            <div className="collection_inner_down_right">
              <Link
                to="/Catalog"
                className="collection_inner_down_img3"
                onClick={() => changeCategory("tops and vests")}
              >
                <p>Топы и жилеты</p>
                <img className="adaptivka_img08" src={collect08} alt="" />
              </Link>
              <Link
                to="/Catalog"
                className="collection_inner_down_img4"
                onClick={() => changeCategory("accessories")}
              >
                <p>Аксессуары</p>
                <img className="adaptivka_img9" src={collect9} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
