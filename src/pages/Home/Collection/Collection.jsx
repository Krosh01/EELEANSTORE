import React from 'react';
import collect1 from '../../../assets/Collection/collect1.png'
import collect2 from '../../../assets/Collection/collect2.png'
import collect3 from '../../../assets/Collection/collect3.png'
import collect4 from '../../../assets/Collection/collect4.png'
import collect5 from '../../../assets/Collection/collect5.png'
import collect6 from '../../../assets/Collection/collect6.png'
import collect7 from '../../../assets/Collection/collect7.png'
import collect8 from '../../../assets/Collection/collect8.png'
import collect08 from '../../../assets/Collection/collect08.png'
import collect9 from '../../../assets/Collection/collect9.png'

const Collection = () => {
    return (
        <section className="collection">
            <div className="container">
                <div className="collection_inner">
                    <div className="collection_inner_top">                  
                        <div className="collection_left">
                            <div className="collection_left_up">
                                <p>Новинки</p>
                                <img src={collect1} alt="" />
                            </div>
                            <div className="colliction_left_down">
                                <div className="left_down_img">
                                    <p>Смокиниги</p>
                                    <img src={collect2} alt="" />
                                </div>
                                <div className="left_down_img">
                                    <p>Брюки</p>
                                    <img src={collect3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="collection_right">
                            <div className="collection_right_up" >
                                <div className="right_down_img">
                                    <p>Акции</p>
                                    <img src={collect4} alt="" />
                                </div>
                                <div className="right_down_img">
                                    <p>Костюмы</p>
                                    <img src={collect5} alt="" />
                                </div>
                            </div>
                            <div className="colliction_right_down">
                                <p>Платья</p>
                                <img src={collect6} alt="" />
                            </div>
                        </div>
                    </div>    
                    <div className="collection_inner_down">
                        <div className="collection_inner_down_img1">
                            <p>Блузы</p>
                            <img src={collect7} alt="" />
                        </div>
                        <div className="collection_inner_down_img2">
                            <p>Юбки</p>
                            <img src={collect8} alt="" />
                        </div>
                        <div className="collection_inner_down_img3">
                            <p>Топы и жилеты</p>
                            <img src={collect08} alt="" />
                        </div>
                        <div className="collection_inner_down_img4">
                            <p>Аксессуары</p>
                            <img src={collect9} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collection;